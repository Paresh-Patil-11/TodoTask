import {useState} from "react"
import {api} from "../api"
import "../style.css"

export default function EditTaskPage({task,setPage}){
  const [title,setTitle]=useState(task.title)
  const [description,setDescription]=useState(task.description)

  async function update(){
    if(!title){
      alert("Title required")
      return
    }
    await api("/tasks/"+task._id,"PUT",{title,description})
    alert("Task updated")
    setPage("tasks")
  }

  return(
    <div className="container-medium">
      <h2>Edit Task</h2>
      <input value={title} onChange={e=>setTitle(e.target.value)} />
      <input value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="btn-primary" onClick={update}>Update</button>
    </div>
  )
}
