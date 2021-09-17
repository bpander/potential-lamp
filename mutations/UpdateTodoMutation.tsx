import { gql } from '@apollo/client';
import { TODO_FIELDS } from '../fragments/TodoFields';

export const UPDATE_TODO = gql`
    ${TODO_FIELDS}
    mutation UpdateTodo($id: ID!, $input: TodoInput!) {
        updateTodo(id: $id, input: $input) {
            ...TodoFields
        }
    }
`;
