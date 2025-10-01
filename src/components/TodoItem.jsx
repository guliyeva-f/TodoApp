import { MdDeleteForever } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <li className={`w-full h-[60px] bg-[#edeef0] rounded-[5px] flex items-center px-[20px] justify-between ${task.completed ? "line-through text-gray-500" : ""}`}
    >{task.todo}
      <span className="text-2xl flex items-center gap-1.5">
        <button onClick={() => deleteTask(task.id)}
          className="cursor-pointer text-red-600 outline-none"
        ><MdDeleteForever />
        </button>
        <button onClick={() => toggleCompleted(task.id)}
          className="cursor-pointer text-green-600 outline-none"
        ><GiCheckMark />
        </button>
      </span>
    </li>
  );
}

export default TodoItem;