import React ,{useState} from "react";
import styles from "./counter.module.css";

let  counts = 0;
const Counter = () => {
  const [counts,setCounts] = useState(0)
  // sample value to be replaced
  
  // NOTE: do not delete `data-cy` key value pair

  let decrement = ()=>{
     if(counts >0 ){
       setCounts(counts - 1 )
     }
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"  onClick = {() => setCounts(counts + 1 )}></button>
      <span data-cy="task-counter-value">{counts}</span>
      <button data-cy="task-counter-decrement-button"  onClick = {decrement} ></button>
    </div>
  );
};

export default Counter;
