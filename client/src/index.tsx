import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client/react';
import client from './config/apollo-client';
<<<<<<< HEAD
import Homepage from './pages/homepage';
=======
import Homepage from './pages/homepage/index';
>>>>>>> 4b3601ed0dc03606cfba7e56ce3295d83bd6551c
import { GlobalStyle } from './style-guide/GlobalStyle';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <ApolloProvider client={client}>
        <GlobalStyle />
        <Homepage />
    </ApolloProvider>,
    document.getElementById('root')
);
