import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TodoApp extends React.Component {
  render() {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    return (
      <div>
        {todoList.map((todo) => (
          <p key={todo.id}>{todo.text}</p>
        ))}
      </div>
    );
  }
}

const todoList = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
  { id: 3, text: 'Todo 3', completed: false },
];
localStorage.setItem('todoList', JSON.stringify(todoList));

ReactDOM.render(<TodoApp />, document.getElementById('app'));
