import { gql } from '@apollo/client';
import { TODO_FIELDS } from '../fragments/TodoFields';

export const ADD_TODO = gql`
    ${TODO_FIELDS}
    mutation AddTodo($input: TodoInput!) {
        addTodo(input: $input) {
            ...TodoFields
        }
    }
`;
