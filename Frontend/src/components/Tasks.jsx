import {useEffect,useState} from "react"
import {api} from "../api"
import "../style.css"

export default function Tasks({setPage,setEditTask}){
  const [tasks,setTasks]=useState([])
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  async function load(){
    const res=await api("/tasks","GET")
    setTasks(res||[])
  }

  async function add(){
    if(!title){
      alert("Title required")
      return
    }
    await api("/tasks","POST",{title,description})
    alert("Task added")
    setTitle("")
    setDescription("")
    load()
  }

  async function del(id){
    await api("/tasks/"+id,"DELETE")
    alert("Task deleted")
    load()
  }

  function edit(task){
    setEditTask(task)
    setPage("edit")
  }

  useEffect(()=>{load()},[])

  return(
    <div className="container-large">
      <h2>My Tasks</h2>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="btn-success" onClick={add}>Add Task</button>

      {tasks.map(t=>(
        <div key={t._id} className="task-box">
          <b>{t.title}</b>
          <p>{t.description}</p>
          <button className="btn-edit" onClick={()=>edit(t)}>Edit</button>
          <button className="btn-delete" onClick={()=>del(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
