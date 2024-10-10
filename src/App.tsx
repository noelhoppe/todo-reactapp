import { useState } from "react";
import FormGroup from "./components/FormGroup";
import ToDoElement from "./components/ToDoElement";

export default function App() {

  const [tasks, setTasks] = useState<string[]>([]);

  function handleTaskAdd(task : string) {
    setTasks(prevTasks => [...prevTasks, task])
  }

  function handleTaskDelete() {

  }


  return (
    <div className="container mt-3">
      <FormGroup onHandleTaskAdd={handleTaskAdd} />
      <ul className="list-group">
        {tasks.map((task, idx) => {
          return <ToDoElement toDoName={task} key={idx} />;
        })}
      </ul>
    </div>
  );
}
