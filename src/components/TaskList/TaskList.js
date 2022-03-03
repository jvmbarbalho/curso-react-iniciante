import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

//props -> {props.title}
export default function TaskList({ title, onAddTask, tasks }) {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const addTask = () => {
    console.log("Na parada!!!");
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          //return <div key={task.id}>{task.title}</div>;
          return (
            <div key={task.id}>
              <div>{task.id}</div>
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                taskState={task.state}
              />
            </div>
          );
        })}
        {count}
        <button onClick={incrementar}>Incremetar</button>
        <button onClick={addTask}>Nova Tarefa</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
