import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleCompleted }) {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TodoItem
            key={task.key}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;