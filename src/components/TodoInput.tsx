import { ChangeEvent, FC, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Todo, todoState } from '../atoms/Todo';

const TodoInput: FC = () => {
  const [title, setTitle] = useState<string>('');
  const setTodos = useSetRecoilState<Todo[]>(todoState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    console.log(title);
    setTodos((todos: Todo[]) => {
      return [...todos, { title, completed: false }];
    });
    setTitle('');
  }

  return (
    <>
      <label>
        タスク名
        <input type="text" value={title} onChange={handleChange} />
      </label>
      <button onClick={handleClick}>登録</button>
    </>
  );
};

export default TodoInput;
