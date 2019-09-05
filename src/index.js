import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

// apollo 
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Grapql queries
const httpLink = createHttpLink({
  uri: `http://206.189.22.170/`
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
});