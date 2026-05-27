import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashborad/EmployeeDashboard'
import AdminDashboard from './components/dashborad/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },[])

  const [user,setUser]= useState(null)
  const [loggedInUserData ,setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser") 
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
    
  },[AuthData])

  const handlLogin =(email, password)=>{
    if (email == 'admin@me.com' && password == '123' )
      { setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
    else if (AuthData){
      const employees= AuthData.employees.find((e)=> e.email == email && e.password == password)
      if(employees){
          setUser('employees')
          setLoggedInUserData(employees)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employees}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
  }

  

  return (
    <>
      {!user ? <Login handlLogin = {handlLogin}/> : ''}
     {/* {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} */}
     {user === 'admin' && <AdminDashboard />}
     {(user === 'employees'  ?<EmployeeDashboard data = {loggedInUserData}/> : null)}
    </>
  )
}

export default App
