import { useState } from 'react';

import { useAppDispatch } from '~/store';
import { checkItem, removeItem } from '~/store/features/todoListSlice';

/**
 *
 * @param id
 * @returns
 */
export function useTodoItem(id: string) {
  const [isChecking, setChecking] = useState(false);
  const [isRemoving, setRemoving] = useState(false);

  const dispatch = useAppDispatch();

  const check = (completed: boolean) => {
    setChecking(true);
    dispatch(checkItem({ completed, id }))
      .unwrap()
      .catch(() => null)
      .finally(() => setChecking(false));
  };

  const remove = () => {
    setRemoving(true);
    dispatch(removeItem({ id }))
      .unwrap()
      .catch(() => null)
      .finally(() => setRemoving(false));
  };

  return { check, remove, isChecking, isRemoving };
}
