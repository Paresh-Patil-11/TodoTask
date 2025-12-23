const url = "http://localhost:5000"

export function saveToken(token){
  localStorage.setItem("token", token)
}

export function getToken(){
  return localStorage.getItem("token")
}

export async function api(path, method, body){
  const res = await fetch(url + path,{
    method,
    headers:{
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: body ? JSON.stringify(body) : null
  })

  if (res.headers.get("content-type")?.includes("application/json")){
    return res.json()
  }
}
