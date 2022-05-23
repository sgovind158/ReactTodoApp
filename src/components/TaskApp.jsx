import React ,{useState} from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader.jsx"
import AddTask from "./AddTask/AddTask.jsx"
import Tasks from "./Tasks/Tasks.jsx"
import {v4 as uuidv4} from "uuid";

const TaskApp = () => {
  const [todos, setTodos] = useState([])
  const [ pendingTask, setPendingTask] = useState(todos.length)
  const [ task,setTask] = useState(todos.length)

  const addTodo = (value) =>{
    setTodos([...todos,{
       id: uuidv4(),
       value: value,
    }])

   setTask(task)
    
  }

  /// delete fun

  const deleteTodo = (value,key)=>{

    let nyatodos = todos.filter((el)=>{
    return  el.id !== key;

    })
    setTodos( nyatodos)
    setPendingTask(nyatodos.length)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
   
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
    <TaskHeader pendingTask={pendingTask} task = {task}/>

   <AddTask addTodo = {addTodo}/>

    <Tasks todos = {todos}  deleteTodo ={deleteTodo}/>
    </div>
    
  );
};

export default TaskApp;
