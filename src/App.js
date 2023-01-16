import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar el curso de Intro a React', completed: false},
  { text: 'Limpiar el crucero', completed: false},
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
