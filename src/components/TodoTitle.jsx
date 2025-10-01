import { FaPencilAlt } from "react-icons/fa"
import { RiTodoLine } from "react-icons/ri"

function TodoTitle() {
    return (
        <div className="text-2xl font-bold w-full flex justify-center items-center gap-1.5">
            <h1>ToDo List</h1>
            <span className="flex items-center"><RiTodoLine /> <FaPencilAlt /></span>
        </div>
    )
}

export default TodoTitle