import React from 'react';
import "./style.css";

function Todolist (){
  var [tasks,setTasks] = React.useState(["Buy new phone","Learn React","Book movie tickets","Repair Laptop","Complete Pending works"]);
  const add =()=>{
    var newtask = document.getElementById('d1').value;
    setTasks([...tasks,newtask])
  }
  const delTask = (index)=>{
    var temp = [...tasks];
    temp.splice(index,1);
    setTasks([...temp])
  }
  return(
    <div className="betterview">
      <h3>To-do list(1st Child)</h3>
      <input type='text' id="d1"/>&nbsp;&nbsp;
      <button onClick={add}>AddTask</button>
      <hr/>
      {
        tasks.map((task,ind)=>{
          return(
            <li>
              {task}
              &nbsp;&nbsp;
            <button onClick={()=>delTask(ind)}>Delete</button>
            <hr/>
            </li>
          )
        })
      }
    </div>
  )
}
export default Todolist;