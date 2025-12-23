import {useState} from "react"
import {api} from "../api"
import "../style.css"

export default function Register({setPage}){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function register(){
    if(!name||!email||!password){
      alert("All fields required")
      return
    }
    const res=await api("/auth/register","POST",{name,email,password})
    if(res?.error){
      alert(res.error)
    }else{
      alert("Register successful")
      setPage("login")
    }
  }

  return(
    <div className="container-small">
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn-warning" onClick={register}>Register</button>
    </div>
  )
}
