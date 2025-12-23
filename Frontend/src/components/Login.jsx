import {useState} from "react"
import {api,saveToken} from "../api"
import "../index.css"

export default function Login({setPage}){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function login(){
    if(!email||!password){
      alert("All fields required")
      return
    }
    const res=await api("/auth/login","POST",{email,password})
    if(res?.token){
      saveToken(res.token)
      alert("Login successful")
      setPage("tasks")
    }else{
      alert(res?.error||"Login failed")
    }
  }

  return(
    <div className="container-small">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn-primary" onClick={login}>Login</button>
    </div>
  )
}
