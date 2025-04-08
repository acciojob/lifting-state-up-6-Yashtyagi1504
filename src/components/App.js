
import React,{useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  let [todos,handleComplete] = useState([{text:"Learn React",status:true},{text:"Build a React app",status:true},{text:"Deploy the React app",status:true}])
  return (
    <div>
    <h1>Parent Component</h1>
        <TodoList todos = {todos} handleComplete = {handleComplete}></TodoList>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
