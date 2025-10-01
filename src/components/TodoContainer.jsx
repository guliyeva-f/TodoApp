import { useState } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoTitle from "./todoTitle";

function TodoContainer() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(1);

  const addTask = (todo) => {
    if (todo.trim() == "") return;

    const newTask = {
      id: counter,
      todo,
      completed: false,
      key: nanoid()
    };

    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
    toast.success("Task əlavə olundu!");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error("Task silindi!");
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

    const task = tasks.find((t) => t.id === id);
    if (task && !task.completed) {
      toast.success("Task tamamlandı!");
    } else {
      toast("Geri qaytarıldı", { icon: "↩️" });
    }
  };

  return (
    <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-white p-4 sm:p-6 md:p-8 h-auto min-h-[70%] rounded-2xl shadow-lg flex flex-col gap-5">
      <TodoTitle />
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default TodoContainer;
