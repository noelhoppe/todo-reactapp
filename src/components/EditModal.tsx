import { useState } from "react";
import ToDo from "../types";

interface Props {
  toDo: ToDo;
  // modalIsOpen: boolean;
  // setModalIsOpen: (prev: boolean) => void;
  onHandleToDoEdit : (id : number, name : string) => void;
}

export default function EditModal({
  toDo,
  onHandleToDoEdit
}: Props) {
  const [toDoNameInput, setToDoNameInput] = useState<string>("");

  function handleEditToDoSubmit() {
    onHandleToDoEdit(toDo.id, toDoNameInput);
    setToDoNameInput("");
  }

  return (
    <>
      <div
        id={`editToDoModal-${toDo.id}`}
        className="modal"
        tabIndex={-1}
        aria-labelledby="editToDo"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editToDo">
                Edit ToDo : {toDo.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                placeholder="Enter new ToDo name"
                value={toDoNameInput}
                onChange={(evt) => setToDoNameInput(evt.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success" onClick={() => handleEditToDoSubmit()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
