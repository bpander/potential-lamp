/**
 * THIS IS A GENERATED FILE, DO NOT MODIFY DIRECTLY
 */

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodo: Todo;
  updateTodo: Todo;
  deleteTodo: Scalars['ID'];
  clearCompleted?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAddTodoArgs = {
  input: TodoInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: TodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Todo>>;
};


export type QueryTodosArgs = {
  complete?: Maybe<Scalars['Boolean']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  text: Scalars['String'];
  complete: Scalars['Boolean'];
};

export type TodoInput = {
  text: Scalars['String'];
  complete?: Maybe<Scalars['Boolean']>;
};

export type TodoFieldsFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'text' | 'complete'>
);

export type AddTodoMutationVariables = Exact<{
  input: TodoInput;
}>;


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { addTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTodo'>
);

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: TodoInput;
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  ) }
);

export type GetTodosQueryVariables = Exact<{
  complete?: Maybe<Scalars['Boolean']>;
}>;


export type GetTodosQuery = (
  { __typename?: 'Query' }
  & { todos?: Maybe<Array<(
    { __typename?: 'Todo' }
    & TodoFieldsFragment
  )>> }
);

export const TodoFieldsFragmentDoc = gql`
    fragment TodoFields on Todo {
  id
  text
  complete
}
    `;
export const AddTodoDocument = gql`
    mutation AddTodo($input: TodoInput!) {
  addTodo(input: $input) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type AddTodoMutationFn = ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;
export type AddTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddTodoMutation, AddTodoMutationVariables>, 'mutation'>;

    export const AddTodoComponent = (props: AddTodoComponentProps) => (
      <ApolloReactComponents.Mutation<AddTodoMutation, AddTodoMutationVariables> mutation={AddTodoDocument} {...props} />
    );
    

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = ApolloReactCommon.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteTodoMutation, DeleteTodoMutationVariables>, 'mutation'>;

    export const DeleteTodoComponent = (props: DeleteTodoComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteTodoMutation, DeleteTodoMutationVariables> mutation={DeleteTodoDocument} {...props} />
    );
    

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $input: TodoInput!) {
  updateTodo(id: $id, input: $input) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type UpdateTodoMutationFn = ApolloReactCommon.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;
export type UpdateTodoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateTodoMutation, UpdateTodoMutationVariables>, 'mutation'>;

    export const UpdateTodoComponent = (props: UpdateTodoComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateTodoMutation, UpdateTodoMutationVariables> mutation={UpdateTodoDocument} {...props} />
    );
    

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = ApolloReactCommon.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const GetTodosDocument = gql`
    query GetTodos($complete: Boolean) {
  todos(complete: $complete) {
    ...TodoFields
  }
}
    ${TodoFieldsFragmentDoc}`;
export type GetTodosComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTodosQuery, GetTodosQueryVariables>, 'query'>;

    export const GetTodosComponent = (props: GetTodosComponentProps) => (
      <ApolloReactComponents.Query<GetTodosQuery, GetTodosQueryVariables> query={GetTodosDocument} {...props} />
    );
    

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      complete: // value for 'complete'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
      }
export function useGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, baseOptions);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = ApolloReactCommon.QueryResult<GetTodosQuery, GetTodosQueryVariables>;