import React, { useState } from'react';
import PropTypes from"prop-types"
import"./taskitem.css";

export default function Taskitem({id, title, taskState,onDeleteTask, onTaskUpdate}) {
  const [isEditing, setEditing] = useState(false);
  const[editTitle, seteditTitle] = useState(title);

  const onTitleChange = (event) =>{
    const newTitle =event.target.value;
    seteditTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };


const onKeyPress = (event) => {
    if (event.key === "Enter") {
    setEditing(false);
    if(editTitle.length ===0){
      onDeleteTask(id);
    }
  }
};


const onTaskStateChange = (event) =>{
  onTaskUpdate(id, title, event.target.value);
}

  if (isEditing){
  return(
  <div className="task-item">
    <input
      type="text"
      value={editTitle} 
      onChange={onTitleChange} 
      onKeyPress={onKeyPress} 
      />
  </div>
  );
  } else {
  return (
    <div className="task-item">
    <div onClick={(e) => setEditing(true)}>{editTitle}</div>
      <select onChange={onTaskStateChange} value={taskState}>
        <option value="Pendente">Pendente</option>
        <option value="Fazendo">Fazendo</option>
        <option value="Concluida">Concluida</option>
    </select>
  </div>
  );
  }
}
Taskitem.propTypes = {
  id:  PropTypes. number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};