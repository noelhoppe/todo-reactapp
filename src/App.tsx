import { useState } from "react";
import FormGroup from "./components/FormGroup";
import ToDoElement from "./components/ToDoElement";
import ToDo from "./types";

export default function App() {
  const [id, setId] = useState(1);
  const [toDos, setToDos] = useState<ToDo[]>([]);

  function handleToDoAdd(name: string) {
    const toDo = { id: id, name: name, isDone: false };
    setId((id) => id + 1);
    setToDos((prevToDos) => [...prevToDos, toDo]);
  }

  function handleToDoDelete(id: number) {
    setToDos(toDos.filter((toDo) => toDo.id != id));
  }

  function toggleToDoDone(id: number) {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.id == id ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  }

  /*
  function handleToDoEdit(id: number, name: string) {
    setToDos((prevToDos) =>
      prevToDos.map((toDo) => (toDo.id == id ? { ...toDo, name: name } : toDo))
    );
  }
  */

  return (
    <div className="container mt-3">
      <FormGroup onHandleToDoAdd={handleToDoAdd} />
      <ul className="list-group">
        {toDos.map((toDo: ToDo) => {
          return (
            <ToDoElement
              key={toDo.id}
              toDo={toDo}
              onHandleToDoDelete={handleToDoDelete}
              onToggleToDoDone={toggleToDoDone}
            />
          );
        })}
      </ul>
    </div>
  );
}
