import React, { createContext, useEffect, useState,Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from './axios';
import Loading from './components/CommonComponent/Loading/Loading';
const Home = React.lazy(()=> import('./components/Home/Home/Home'))
const Appointment = React.lazy(()=> import('./components/Appointment/Appointment'))
const Login = React.lazy(()=> import('./components/Login/Login'))
const PrivateRoute = React.lazy(()=> import('./components/Login/PrivateRoute/PrivateRoute'))
const CheckOut = React.lazy(()=> import('./components/Appointment/CheckOut/CheckOut'))
const MyAppointment = React.lazy(()=> import('./components/MyAppointment/MyAppointment'))
const NotFound = React.lazy(()=> import('./components/CommonComponent/NotFound/NotFound'))
export const UserContext = createContext()
function App() {
  const [userDataInfo, setUserDataInfo] = useState({
    isSignedIn: false,
    email: "",
    photoURL: "",
    appointmentDate:new Date().toDateString(),
    appointmentDateStates:false,
  })
  const [myAppointment,setMyAppointment] = useState(false)
  useEffect(()=>{
    axios.get('/patients/'+userDataInfo.email)
    .then(res => setMyAppointment(res.data.length > 0))
  },[userDataInfo.email])
    return (
      <Suspense fallback={<Loading/>}>
    <UserContext.Provider value={[userDataInfo, setUserDataInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          {myAppointment?<PrivateRoute path="/myAppointment">
            <MyAppointment />
          </PrivateRoute>:""}
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:appointmentId">
            <CheckOut />
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </Suspense>
  );
}

export default App;
