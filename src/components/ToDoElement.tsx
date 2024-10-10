interface Props {
  toDoName: string;
}

export default function ToDoElement({toDoName }: Props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="done" />
        <label className="form-check-label" htmlFor="done">
          {toDoName}
        </label>
      </div>
      <div>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          X
        </button>
      </div>
    </li>
  );
}
