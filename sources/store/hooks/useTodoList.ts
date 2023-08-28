import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

import { useAppDispatch, useAppSelector } from '~/store';
import { setError, setItems, setLoading } from '~/store/features/todoListSlice';
import type { TodoDocument } from '~/store/types';

/**
 * Yeap, this should be moved to the store,
 * add pagination and track subscriptions.
 * @returns
 */
export function useTodoList() {
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(setLoading());
      return firestore()
        .collection<TodoDocument>('Todo')
        .onSnapshot(
          snapshot => {
            dispatch(
              setItems(
                snapshot.docs.map(document => ({
                  id: document.id,
                  ...document.data(),
                })),
              ),
            );
          },
          () => {
            dispatch(setError());
          },
        );
    },
    //
    [dispatch],
  );

  return useAppSelector(state => state.todoList);
}
