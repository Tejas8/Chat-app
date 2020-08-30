import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import chat from './chat';
import * as serviceWorker from './serviceWorker';
import Chat from './chat';

ReactDOM.render(
  
    <div className='container'>
    <div className='box-1'>
    <App />
    </div>
    <div className='box-2'>
       <Chat />
    </div>
    </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
