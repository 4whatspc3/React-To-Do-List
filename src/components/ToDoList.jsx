import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Programming",
    "Watch boxing",
    "Read a book",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    return setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Move up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Move down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
