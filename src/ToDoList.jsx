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
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div className="get-data">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            &#10133; Add
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
                &#10006; Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                &#128228; Move up
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                &#128229; Move down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
