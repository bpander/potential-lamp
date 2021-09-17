import { gql } from '@apollo/client';
import { TODO_FIELDS } from '../fragments/TodoFields';

export const GET_TODOS = gql`
    ${TODO_FIELDS}
    query GetTodos($complete: Boolean) {
        todos(complete: $complete) {
            ...TodoFields
        }
    }
`;
