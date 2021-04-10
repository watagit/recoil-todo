import { atom } from 'recoil';

export interface Todo {
  title: string;
  completed: boolean;
}

const initialTasks: Todo[] = [];

export const todoState = atom({
  key: 'todo',
  default: initialTasks
});
