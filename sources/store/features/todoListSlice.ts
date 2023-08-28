import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import type { PayloadAction } from '@reduxjs/toolkit';

import { wait } from '~/helpers/utils';
import { thoughtfulness } from '~/helpers/miscellaneous';
import type { Todo, TodoDocument } from '~/store/types';

interface TodoListState {
  data: Todo[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const initialState: TodoListState = {
  data: undefined,
  isLoading: false,
  isError: false,
};

const todoListSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    setItems(state, action: PayloadAction<Todo[]>) {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    setLoading(state) {
      state.isLoading = true;
    },
    setError(state) {
      state.isLoading = true;
    },
  },

  extraReducers: builder => {
    builder.addCase(addItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addItem.rejected, state => {
      state.isError = true;
    });

    builder.addCase(checkItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkItem.rejected, state => {
      state.isError = true;
    });

    builder.addCase(removeItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(removeItem.rejected, state => {
      state.isError = true;
    });
  },
});

export const addItem = createAsyncThunk<void, { title: string }>(
  'todo/addItemStatus',
  async ({ title }) => {
    await wait(thoughtfulness * Math.random()); // just a demo...
    await firestore()
      .collection<TodoDocument>('Todo')
      .add({ title, completed: false });
  },
);

export const checkItem = createAsyncThunk<
  void,
  { id: string; completed: boolean }
>('todo/checkItemStatus', async ({ id, completed }) => {
  await wait(thoughtfulness * Math.random()); // just a demo...
  await firestore()
    .collection<TodoDocument>('Todo')
    .doc(id)
    .update({ completed });
});

export const removeItem = createAsyncThunk<void, { id: string }>(
  'todo/removeItemStatus',
  async ({ id }) => {
    await wait(thoughtfulness * Math.random()); // just a demo...
    await firestore().collection<TodoDocument>('Todo').doc(id).delete();
  },
);

export const { setItems, setLoading, setError } = todoListSlice.actions;

export default todoListSlice.reducer;
