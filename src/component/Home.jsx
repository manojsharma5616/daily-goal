import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
const initalArray=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
  const [tasks, setTasks] = useState(initalArray);
  // const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // console.log(...tasks,4,6,7);
  const addTask = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(description);
    if(title==="" && description===""){
      return;
    }
    setTasks([
      ...tasks,
      {
        title: title,
        description: description,
      },
    ]);
    setTitle("");
    setDescription("");
    // localStorage.setItem('tasks',JSON.stringify(tasks));
  };
  const deleteTask=(index)=>{
    const filterArray=tasks.filter((value,i,array)=>{
      return i !== index;
    })
    console.log(filterArray);
    setTasks(filterArray);
  }
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])
  return (
    <div className="container">
      <form>
        <h1>DAILY GOALS</h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button type="submit" onClick={addTask}>
          Add
        </button>
      </form>
      {tasks.map((value, index, array) => (
        <Task key={index} title={value.title} description={value.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  );
};

export default Home;
