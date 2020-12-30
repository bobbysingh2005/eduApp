import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache,  } from '@apollo/client';
import MainRoutes from './routes';
import cookie from 'js-cookie';
import 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import "bootstrap/dist/js/bootstrap";
import "./main.css";

const token = cookie.get('token') ? `barer ${cookie.get('token')}` : false;
const Client = new ApolloClient({
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache(),
  headers: {
    authorization: token
  }
});//end;

ReactDOM.render(
    <ApolloProvider client={Client}>
<MainRoutes />
    </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
reportWebVitals();
