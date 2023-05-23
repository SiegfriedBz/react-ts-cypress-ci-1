import React from 'react'
import './App.css'
import { Form, TodoList } from './components'

const App = (): React.JSX.Element => {

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
