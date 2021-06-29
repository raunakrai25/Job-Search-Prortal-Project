import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import Login from './pages/Login/index1'
import Signup from './pages/signup'
import HomePage from './pages/HomePage'
import UserSignup from './pages/signup/UserSignup'
import RecruiterSignup from './pages/signup/RecruiterSignup'
import UserLogin from './pages/Login/UserLogin/index'
import RecruiterLogin from './pages/Login/RecruiterLogin/index'
import Dashboard from './pages/dashBoard/index'
import AdminDash from './pages/dashBoard/AdminDash'
import RecruiterDetails from './pages/Forms/AdminDetails'
import UserDetails from './pages/Forms/User'
import AllJobs from './pages/allJobs'

const App = () => {
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState({})

  useEffect(() => {
    let savedUser = localStorage.getItem('user')
    if (savedUser && Object.keys(user).length === 0) {
      setUser(JSON.parse(savedUser).user)
    }
  }, [user])

  useEffect(() => {
    let savedAdmin = localStorage.getItem('admin')
    if (savedAdmin && Object.keys(admin).length === 0) {
      setAdmin(JSON.parse(savedAdmin).admin)
    }
  }, [admin])

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path={'/'} exact>
            <HomePage />
          </Route>
          <Route path={'/signup'} exact>
            <Signup />
          </Route>
          <Route path={'/login'} exact>
            <Login setUserState={setUser} />
          </Route>
          <Route path={'/signup/user-signup'} exact>
            <UserSignup setUserState={setUser} />
          </Route>
          <Route path={'/signup/recruiter-signup'} exact>
            <RecruiterSignup setUserState={setUser} />
          </Route>
          <Route path={'/login/user-login'} exact>
            <UserLogin setUserState={setUser} />
          </Route>
          <Route path={'/login/recruiter-login'} exact>
            <RecruiterLogin />
          </Route>
          <Route path={'/Admin/details'} exact>
            <RecruiterDetails setUserState={setUser} />
          </Route>
          <Route path={'/User/apply'} exact>
            <UserDetails setUserState={setUser} />
          </Route>
          <Route path={'/Dashboard'} exact>
            <Dashboard setUserState={setUser} />
          </Route>
          <Route path={'/AdminDash'} exact>
            <AdminDash setUserState={setUser} />
          </Route>
          <Route path={'/Admin/companyProfile'} exact>
            <AllJobs />
          </Route>
          <Route path={'/admin/appplications'} exact>
            <AllJobs />
          </Route>

          <Route path={'/404'} exact>
            <h>404 - Not Found</h>
          </Route>
          <Route path={'/**'} exact>
            <Redirect to={'/404'} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
