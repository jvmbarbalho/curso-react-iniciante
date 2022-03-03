import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({ id, title, taskState }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        tupe="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
    );
  }

  return <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>;
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};