import { Toaster } from "react-hot-toast"
import TodoContainer from "./components/TodoContainer"

function App() {

  return (
    <div className="bg-[#79c1f3] h-screen flex items-center p-6 justify-center">
      <TodoContainer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App