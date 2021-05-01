import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';

import { Todo } from '../types/Todo';
import { todoState } from '../atoms/Todo';

const AboutPage: NextPage = () => {
  const todos = useRecoilValue<Todo[]>(todoState);

  return (
    <>
      {todos.map((todo: Todo) => (
        <div>{todo.title}</div>
      ))}
    </>
  );
};

export default AboutPage;
