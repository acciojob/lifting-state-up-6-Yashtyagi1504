import React from "react";

// Receive todos array and handleComplete function as props
function TodoList({ todos, handleComplete }) {

    // No local state management needed here

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {/* Map over the todos array */}
                {todos.map((todo) => (
                    // Use a unique key for each list item (todo.id is good)
                    <li key={todo.id}>
                        {todo.text}
                        {/* Conditionally render the button only if the todo is NOT completed */}
                        {!todo.completed ? (
                            <button
                                // Call the handleComplete function passed via props, passing the todo's id
                                onClick={() => handleComplete(todo.id)}
                                // Optional: Add id to button if needed for testing, using todo.id
                                id={`button-${todo.id}`}
                            >
                                Complete
                            </button>
                        ) : null /* Render nothing if already completed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;



// import React from "react";
//  function TodoList({todos,handleComplete}){

//     function handleClick(e){
//         let index = parseInt(e.target.id);
//         let newArr = todos.map((value,i)=>
//             index == i ? {...value,status:false}:value
//         )
//           handleComplete(newArr)
        
//     }

//     return(
//         <div>
//             <h2>Child Component</h2>
//             <ul>
//                 {
//                     todos.map((str,index) =>(
                        
//                         <li>{str.text}
//                             {str.status?<button onClick={handleClick} id={index}>Complete</button>:null}
//                         </li>
                        
                        
//                     ))
//                 }
//             </ul>
//         </div>
//     )


//  }

//  export default TodoList;


