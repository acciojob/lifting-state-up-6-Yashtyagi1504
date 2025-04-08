import React from "react";
 function TodoList({todos,handleComplete}){

    function handleClick(e){
        let index = parseInt(e.target.id);
        let newArr = todos.map((value,i)=>
            index == i ? {...value,status:false}:value
        )
          handleComplete(newArr)
        
    }

    return(
        <div>
            <h2>Child Component</h2>
            <ul>
                {
                    todos.map((str,index) =>(
                        <div>
                        <li>{str.text}
                            {str.status?<button onClick={handleClick} id={index}>Complete</button>:null}
                        </li>
                        
                        </div>
                    ))
                }
            </ul>
        </div>
    )


 }

 export default TodoList;