import { useReducer } from "react";
import "./App.css";
import AddTask from "./Component/AddTask";
import TaskBord from "./Component/TaskBord";
import { initialTasks } from "./data/data";
import taskReducer from "./Reducer/taskReducer";
import "./style.css";
function App() {
  // useReducer state and dispatch namok akta fuction nei ta shudhu bole dei handle ki korte hobe
  // component onek handler / (business logic) thakte pare ja kono update korte ba jodi bug ase to khuje ber korte aktu kosto kor
  // reducer amader ei kaj ta korte  aktu shubidha diyeche amra main componet koro handler ba business logic rakbo na. handler gulo akta alada js file define kore rakhbo

  // main component sudhu bole dibo ki korte hobe
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const getNextId = (data) => {
    const maxtId = data.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id,
    );
    return maxtId + 1;
  };
  // handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
