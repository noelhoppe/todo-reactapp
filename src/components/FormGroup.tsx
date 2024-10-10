import { useState } from "react";

interface Props {
  onHandleTaskAdd : (task : string) => void
}


export default function FormGroup({onHandleTaskAdd} : Props) {

  const [taskInput, setTaskInput] = useState<string>("");

  function handleTaskSubmit() {
    onHandleTaskAdd(taskInput);
    setTaskInput("");
  }

  
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          aria-describedby="button-addToDo"
          value={taskInput}
          onChange={evt => setTaskInput(evt.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addToDo"
          onClick={handleTaskSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
}
