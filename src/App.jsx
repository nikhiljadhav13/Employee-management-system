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

  const AuthData = useContext(AuthContext)

  useEffect(()=>{
    if(AuthData){
    const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }

  },[AuthData])

  
  const handlLogin =(email, password)=>{
    if (email == 'admin@me.com' && password == '123' )
      { setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
    else if (AuthData.employees.find((e)=> e.email == email && e.password == password)){
      setUser('employees')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employees'}))

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
     {user === 'employees' && <EmployeeDashboard />}
    </>
  )
}

export default App
