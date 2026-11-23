import { useState } from "react";
import "./App.css";
import AddTask from "./Component/AddTask";
import TaskBord from "./Component/TaskBord";
import { initialTasks } from "./data/data";
import "./style.css";
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const getNextId = (data) => {
    const maxtId = data.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id,
    );
    return maxtId + 1;
  };
  // handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskBord
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
