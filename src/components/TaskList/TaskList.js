import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

//props -> {props.title}
export default function TaskList({
  title,
  state,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    console.log("Na parada!!!");
    onAddTask("Nova Tarefa", state);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          //return <div key={task.id}>{task.title}</div>;
          return (
            <div key={task.id}>
              <TaskItem
                id={task.id}
                title={task.title}
                taskState={task.state}
                onTaskUpdate={onTaskUpdate}
                onDeleteTask={onDeleteTask}
              />
            </div>
          );
        })}
        <button onClick={addTask}>Nova Tarefa</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
