import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';

class TodoApp extends React.Component {
  render(){
    return <p>{todoList[]}</p>
  }
}

const todoList = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
  { id: 3, text: 'Todo 3', completed: false },
];
localStorage.setItem('todoList', JSON.stringify(todoList));


ReactDOM.render(<TodoApp/>, document.getElementById('app'));

