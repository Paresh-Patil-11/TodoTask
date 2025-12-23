import {useState} from "react"
import Login from "./components/Login"
import Register from "./components/Register"
import Tasks from "./components/Tasks"
import EditTask from "./components/EditTask"
import Navbar from "./components/Navbar"
import {getToken} from "./api"

export default function App(){
  const [page, setPage] = useState(getToken() ? "tasks" : "login")
  const [editTask, setEditTask] = useState(null)

  return (
    <>
    <div>
      <Navbar page={page} setPage={setPage}/>
      {page === "login"&& <Login setPage={setPage}/>}
      {page === "register" &&<Register setPage={setPage}/>}
      {page === "tasks"&&<Tasks setPage={setPage} setEditTask={setEditTask}/>}
      {page === "edit" && <EditTask task={editTask} setPage={setPage}/>}
    </div>
    </>
  )
}
