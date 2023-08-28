import type { Todo } from '~/store/types';

/**
 * API stupidness factor :)
 */
export const thoughtfulness = 2500;

export const hitSlop = { left: 5, right: 5, top: 10, bottom: 10 };

export const todoKeyExtractor = (item: Todo) => item.id;
