import { useState } from "react";
import ToDo from "../types";

interface Props {
  toDo: ToDo;
  onHandleToDoDelete: (id: number) => void;
  onToggleToDoDone: (id: number) => void;
}

export default function ToDoElement({
  toDo,
  onHandleToDoDelete,
  onToggleToDoDone,
}: Props) {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="done"
          onChange={() => onToggleToDoDone(toDo.id)}
        />
        <label className={`form-check-label ${toDo.isDone ? "text-decoration-line-through text-muted" : ""}`} htmlFor="done">
          {toDo.name}
        </label>
      </div>
      <div>
        <button type="button" className="btn btn-warning me-1">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onHandleToDoDelete(toDo.id)}
        >
          X
        </button>
      </div>
    </li>
  );
}
