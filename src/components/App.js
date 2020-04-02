import React from 'react';
import TodoList from './Todos/TodoList';


const App = () => {
  return (
    <div className="ui stackable doubling grid">
      <div className="ten wide centered column">
        <div className="ui centered blue huge header">ToDo List</div>
        <TodoList />
      </div>
     
      

    </div>
  );
}

export default App;
