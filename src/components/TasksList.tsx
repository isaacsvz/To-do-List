import { useState } from "react";
import TaskItem from "./TaskItem";
const TasksList = () => {
  let [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  function handleAddTask() {
    if (!taskInput.trim()) return;
    setTasks((f) => [...f, taskInput]);
    setTaskInput("");
  }

  function handleRemoveTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-warning text-warning"
          type="button"
          id="button-addon1"
          onClick={handleAddTask}
        >
          Add
        </button>
        <input
          type="text"
          className="form-control border-transparent bg-dark-subtle"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
      </div>
      <div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <TaskItem
              item={task}
              key={index}
              onClose={() => handleRemoveTask(index)}
            ></TaskItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksList;
