import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;



// import React,{useState} from "react";
// import './../styles/App.css';
// import TodoList from "./TodoList";

// const App = () => {

//   let [todos,handleComplete] = useState([{text:"Learn React",status:true},{text:"Build a React app",status:true},{text:"Deploy the React app",status:true}])
//   return (
//     <div>
//     <h1>Parent Component</h1>
//         <TodoList todos = {todos} handleComplete = {handleComplete}></TodoList>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
