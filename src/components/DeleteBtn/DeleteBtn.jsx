import React from "react";
import { ReactComponent as RemoveCircle } from "../../assets/remove_circle.svg";

const DeleteBtn = ({ id, deleteTimer }) => (
  <span className="timetracker-control">
    <RemoveCircle onClick={() => deleteTimer(id)} />
  </span>
);

export default DeleteBtn;
