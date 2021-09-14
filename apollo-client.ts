import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import omitDeep from '@typescript-runtime-schema/omit-deep';

const omitTypenameLink = new ApolloLink((operation, forward) => {
    if (operation.variables) {
        operation.variables = omitDeep(['__typename'], operation.variables);
    }
    return forward(operation).map((data) => {
        return data;
    });
});

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });


export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([omitTypenameLink, httpLink]),
});
