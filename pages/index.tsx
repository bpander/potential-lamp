import { gql, useMutation, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import { useMemo } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/dist/client/router';

const TODO_FIELDS = gql`
fragment todoFields on Todo {
  id
  text
  complete
}
`;

const GET_TODOS = gql`
${TODO_FIELDS}
query GetTodos($complete: Boolean) {
  todos(complete: $complete) {
    ...todoFields
  }
}
`;

const UPDATE_TODO = gql`
${TODO_FIELDS}
mutation UpdateTodo($id: ID!, $input: TodoInput!) {
  updateTodo(id: $id, input: $input) {
    ...todoFields
  }
}
`;

const DELETE_TODO = gql`
mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
`;

const Home: NextPage = () => {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(GET_TODOS);

  const [updateTodo] = useMutation(UPDATE_TODO, {
    optimisticResponse: ({ id, input }) => ({ updateTodo: { id, ...input } }),
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    optimisticResponse: ({ id }) => ({ deleteTodo: id }),
    update: (cache, { data: { deleteTodo } }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      const todo = todos.find(x => x.id === deleteTodo);
      if (todo) {
        cache.evict({ id: cache.identify(todo) });
        cache.gc();
      }
    },
  });

  const filteredTodos = useMemo(() => {
    if (!data?.todos) { return []; }
    if (!query.complete) {
      return data.todos;
    }
    const complete = query.complete === 'complete';
    return data.todos.filter(x => x.complete === complete);
  }, [data, query.complete]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link replace href="/">
          All
        </Link>
        <Link replace href={'/active'}>
          Active
        </Link>
        <Link replace href={'/complete'}>
          Complete
        </Link>

        <ul>
          {filteredTodos.map(({ id, ...todo }) => (
            <li key={id}>
              <input type="checkbox" checked={todo.complete} onChange={() => {
                updateTodo({ variables: { id, input: { ...todo, complete: !todo.complete } } });
              }} />
              {todo.text}
              <button onClick={() => deleteTodo({ variables: { id } })}>delete</button>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

export default Home
