import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function OnTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar essa tarefa
      if (task.id === taskId) {
        // ... = tudo que ta na tarefa;
        return { ...task, isCompleted: !task.isCompleted };
      }
      //não preciso atualizar
      return task;
    });
    setTasks(newTasks);
  }

  function OnDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function OnAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask OnAddTaskSubmit={OnAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          OnTaskClick={OnTaskClick}
          OnDeleteTaskClick={OnDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
