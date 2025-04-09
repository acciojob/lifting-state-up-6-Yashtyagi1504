import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            )}
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

// // import React from "react";

// // function TodoList({ todos, handleComplete }) {
// //   function handleClick(index) {
// //     const updatedTodos = todos.map((todo, i) =>
// //       i === index ? { ...todo, status: false } : todo
// //     );
// //     handleComplete(updatedTodos);
// //   }

// //   return (
// //     <div>
// //       <h2>Child Component</h2>
// //       <ul>
// //         {todos.map((todo, index) => (
// //           <li key={index}>
// //             {todo.text}
// //             {todo.status && (
// //               <button onClick={() => handleClick(index)} id={`btn-${index}`}>
// //                 Complete
// //               </button>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default TodoList;
