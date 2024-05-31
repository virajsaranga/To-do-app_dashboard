import React from "react";
import { useDispatch } from "react-redux";
import { markAsDone } from "../store/todoSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleMarkAsDone = () => {
    dispatch(markAsDone(task.id));
  };

  return (
    <div>
      <p>{task.todo}</p>
      <button onClick={handleMarkAsDone}>Mark as done</button>
    </div>
  );
};

export default TaskItem;
