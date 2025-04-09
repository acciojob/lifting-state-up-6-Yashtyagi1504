import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
    // Correct useState usage: [stateValue, stateSetter]
    // Use more descriptive state: 'completed: false' initially
    // Add unique IDs for better handling than index
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a React app", completed: false },
        { id: 3, text: "Deploy the React app", completed: false }
    ]);

    // Define the handler function in the parent component
    const handleComplete = (idToComplete) => {
        // Create the new array with the updated item
        const updatedTodos = todos.map(todo => {
            if (todo.id === idToComplete) {
                // Return a *new* object with completed set to true
                return { ...todo, completed: true };
            }
            return todo; // Return unchanged todo for other items
        });
        // Use the state setter function to update the state
        setTodos(updatedTodos);
    };

    return (
        <div id="main"> {/* Ensure the main div has id="main" if tests rely on it */}
            <h1>Parent Component</h1>
            {/* Pass the state array and the actual handler function */}
            <TodoList todos={todos} handleComplete={handleComplete} />
        </div>
    );
}

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
