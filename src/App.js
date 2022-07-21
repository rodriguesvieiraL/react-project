import "./styles.css";
import React, {useState} from"react";
import  Tasklist  from "./componentes/tasklist/tasklist";
import  Navbar from "./componentes/navbar/navbar";  


let acinarID =0;
const gerarId = () => {
  acinarID = acinarID + 1;
  return acinarID;
};

export default function App() {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) =>{
    
    
    
    const newTask = {
      id: gerarId(),
      title,
      state
    };

    setTasks((tasksExistentes) => {
      return [...tasksExistentes, newTask];
    });
  }
  
  const updateTask =(id, title, state) =>{
    console.log("update sendo chamada")
  setTasks((tasksExistentes) => {
    return tasksExistentes.map((task) =>{
      if(task.id === id) {
          return {...task, title,state };
      } else {
        return task;
      }
    });
  });
};

const deleteTask = (id) =>{
  setTasks((tasksExistentes) =>{
    return tasksExistentes.filter(task => task.id !== id);
  });
};

  return (
    <div className="App">
      <Navbar/>
        <div className="container">
        <Tasklist 
          title="Pendente" 
          taskState="Pendente" 
          onAddTask={addTask}  
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          />
        <Tasklist 
          title="Fazendo" 
          taskState="Fazendo" 
          onAddTask={addTask}  
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          />
        <Tasklist 
          title="Concluida" 
          taskState="Concluida" 
          onAddTask={addTask}  
          tasks={tasks.filter((t) => t.state === "Concluida")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
          />
     
        </div>
     </div>
  );
  
}


