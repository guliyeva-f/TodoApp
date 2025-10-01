import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

function TodoInput({ addTask }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleAdd = () => {
    if (value.trim() == "") return; 
    addTask(value);
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="bg-[#edeef0] pl-[20px] rounded-full flex justify-between overflow-hidden h-[50px] shadow-2xs">
      <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)}
        type="text" className="w-full h-full outline-none" placeholder="Add your task"
      />
      <button type="button" onClick={handleAdd}
        className="bg-[#2dce2d] px-[20px] flex items-center justify-center rounded-full cursor-pointer text-white"
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default TodoInput;