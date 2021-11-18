import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const userList = [{id:0 ,name:'sama',age:32}]
const App = ()=>{
  const [user,setUser]=useState(userList)

  const saveUser = (data)=>{
    setUser((prevState)=>{
      debugger
        return [...prevState,data]
      })
  }
  return(
    <div>
      <AddUser onSaveUser= {saveUser}/>

      <UserList userData = {user}/>
    </div>
  )
}
export default App;