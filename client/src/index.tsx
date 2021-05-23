import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import client from './config/apollo-client';
import Homepage from '../src/View/homepage/Homepage';
import { GlobalStyle } from './style-guide/GlobalStyle';

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyle />
        <Homepage />
    </ApolloProvider>,
    document.getElementById('root')
);
