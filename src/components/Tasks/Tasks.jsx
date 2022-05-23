import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({todos,deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>

      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
     
     {todos.map((el)=>{
       return   <Task key = {el.id} id = {el.id} deleteTodo={deleteTodo}  value = {el.value}/>
     })} 
             
     
         
   
           
      
       
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
