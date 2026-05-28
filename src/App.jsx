import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashborad/EmployeeDashboard'
import AdminDashboard from './components/dashborad/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const { userData } = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser && userData?.employees) {

      const userDataFromStorage = JSON.parse(loggedInUser)

      setUser(userDataFromStorage.role)

      if (userDataFromStorage.role === 'employees') {

        const currentEmployee = userData.employees.find(
          (e) => e.email === userDataFromStorage.data.email
        )

        setLoggedInUserData(currentEmployee)
      }
    }
    
  }, [userData])

  const handlLogin = (email, password) => {

    if (email === 'admin@me.com' && password === '123') {

      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )

    }

    else if (userData?.employees) {

      const employee = userData.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {

        setUser('employees')

        setLoggedInUserData(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employees',
            data: employee
          })
        )

      } else {

        alert('Invalid Credentials')
      }
    }
  }

  return (
    <>

      {!user && <Login handlLogin={handlLogin} />}

      {user === 'admin' && <AdminDashboard />}

      {user === 'employees' && loggedInUserData && (
        <EmployeeDashboard data={loggedInUserData} />
      )}

    </>
  )
}

export default App