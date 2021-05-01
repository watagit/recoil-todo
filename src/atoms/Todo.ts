import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { Todo } from '../types/Todo';

const { persistAtom } = recoilPersist();

const initialTasks: Todo[] = [];

export const todoState = atom({
  key: 'todo',
  default: initialTasks,
  effects_UNSTABLE: [persistAtom],
});
