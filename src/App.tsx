import React from 'react'
import './App.css'
import { Form } from './components'
import { TodoList } from './components'

const App = () => {

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
