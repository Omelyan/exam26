import React, { useState } from 'react';
import { ListRenderItem } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ListScene } from '~/scenes';
import { Label, ListHeader, Reflex, TodoItem } from '~/components';
import { useTodoList } from '~/store/hooks';
import { todoKeyExtractor } from '~/helpers/miscellaneous';

import type { RootStackParamList } from '~/navigation/types';
import type { Todo } from '~/store/types';

type TodoListProps = NativeStackScreenProps<RootStackParamList, 'TodoList'>;

export const TodoList = ({ navigation }: TodoListProps) => {
  const [filter, setFilter] = useState<boolean | undefined>();
  const { data, isLoading, isError } = useTodoList();

  const filteredData =
    data?.filter(({ completed }) => completed === (filter ?? completed)) ?? [];

  const renderItem: ListRenderItem<Todo> = ({ item, index }) => (
    <TodoItem index={index} {...item} />
  );

  const renderListFooterComponent = () => {
    if (filteredData.length === 0) return null;
    return <Reflex color="white" />;
  };

  const onPressAdd = () => {
    navigation.navigate('CreateTodo');
  };

  return (
    <ListScene
      data={filteredData}
      activity={isLoading}
      renderItem={renderItem}
      keyExtractor={todoKeyExtractor}
      windowSize={11}
      initialNumToRender={8}
      maxToRenderPerBatch={8}
      ListHeaderComponent={
        <ListHeader
          filter={filter}
          onPressAdd={onPressAdd}
          onSetFilter={setFilter}
        />
      }
      ListFooterComponent={renderListFooterComponent}
      ListEmptyComponent={<Label color="white">No todos yet.</Label>}
    />
  );
};
