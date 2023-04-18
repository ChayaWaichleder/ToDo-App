import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function getIntialToDo() {
  const todoList = JSON.parse(localStorage.getItem('todoList'));
  if (todoList) {
    return todoList;
  } else {
    const todoList = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
      { id: 3, text: 'Todo 3', completed: false },
    ];
    localStorage.setItem('todoList', JSON.stringify(todoList));
    return todoList;
  }
}

function TodoApp() {
  const todoList = getIntialToDo();
  return (
    <div>
      {todoList.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));
