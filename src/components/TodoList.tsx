import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import TodoInput from './TodoInput';
import { Todo, todoState } from '../atoms/Todo';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const todos = useRecoilValue<Todo[]>(todoState);
  console.log(todos)

  return (
    <>
      <TodoInput />
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} index={i} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
