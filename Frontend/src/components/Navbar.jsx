import "../index.css"

export default function Navbar({page,setPage}){
  function logout(){
    localStorage.removeItem("token")
    setPage("login")
  }

  return(
    <div className="navbar">
      <h3>Todo App</h3>
      <div>
        {page==="tasks"?
          <button className="nav-logout" onClick={logout}>Logout</button>
        :
          <>
            <button className="nav-login" onClick={()=>setPage("login")}>Login</button>
            <button className="nav-register" onClick={()=>setPage("register")}>Register</button>
          </>
        }
      </div>
    </div>
  )
}
