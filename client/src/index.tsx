import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import client from './config/apollo-client';
import Homepage from './pages/homepage/index';
import { GlobalStyle } from './style-guide/GlobalStyle';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyle />
        <Homepage />
    </ApolloProvider>,
    document.getElementById('root')
);
