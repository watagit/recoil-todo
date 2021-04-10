import { FC } from 'react';
import { Todo, todoState } from '../atoms/Todo';
import { useRecoilState } from 'recoil';

interface Props {
  todo: Todo;
  index: number;
}

const removeTodosAtIndex = (todos: Todo[], index: number) => {
  return [...todos.slice(0, index), ...todos.slice(index + 1)];
}

const replaceTasksAtIndex = (todos: Todo[], index: number, newTodo: Todo) => {
  return [...todos.slice(0, index), newTodo, ...todos.slice(index + 1)];
}

const TodoItem: FC<Props> = ({ todo, index }) => {
  const [todos, setTodos] = useRecoilState(todoState);

  const handleChange = () => {
    const newTodos = replaceTasksAtIndex(todos, index, {
      ...todo,
      completed: !todo.completed
    });
    setTodos(newTodos);
  }

  const handleClick = () => {
    const newTodos = removeTodosAtIndex(todos, index);
    setTodos(newTodos);
  }

  return (
    <li key={index}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleChange}
      />
      {todo.title}
      <button onClick={handleClick}>削除</button>
    </li>
  );
};

export default TodoItem;
