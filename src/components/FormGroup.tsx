import { useState } from "react";

interface Props {
  onHandleToDoAdd : (task : string) => void
}

export default function FormGroup({onHandleToDoAdd} : Props) {

  const [toDoInput, setToDoInput] = useState<string>("");

  function handleToDoSubmit() {
    onHandleToDoAdd(toDoInput);
    setToDoInput("");
  }

  return (
    <>
      <div className="input-group mb-3">
        <input
          autoFocus
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          aria-describedby="button-addToDo"
          value={toDoInput}
          onChange={evt => setToDoInput(evt.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addToDo"
          onClick={handleToDoSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
}
