import React from "react";
import"./tasklist.css";
import Proptypes from "prop-types";
import Taskitem from "../taskitem/taskitem";
import PlusSolid from"../../img/plus-solid.svg";
export default function  Tasklist({title, onAddTask, taskState, tasks, onTaskUpdate, onDeleteTask}) {

const AddTask = () => {

  onAddTask("nova tarefa", taskState);
};

return(
   <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"> 
      
      {tasks.map((task) => {
      return ( 
      <Taskitem 
      key={task.id} 
      id={task.id} 
      title={task.title} 
      taskState={task.state}
      onTaskUpdate={onTaskUpdate}
      onDeleteTask={onDeleteTask}
      />
      );
      })}
        {tasks.length ===0 && <div className="empty-list">lista vazia</div>}
        <button onClick = {AddTask} className="btn"> 
          <img src={PlusSolid} alt="plus"/>
          Adicionar Tarefa 
        </button>
      </div>
    </div>
);

}

Tasklist.proptypes = {
  title: Proptypes.string.isRequired,
  onAddTask:  Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired
};