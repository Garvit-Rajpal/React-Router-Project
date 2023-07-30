import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginUp";
import Signup from "./pages/Signup";
import { useState } from "react";


function App() {

  const [loggedIn,setIsLoggedIn]=useState(false);
  return (
  <div>
    <Navbar loggedIn={loggedIn}/>

    <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn}></Login>}></Route>
       <Route path="/signup" element={<Signup setLoggedIn={setIsLoggedIn}></Signup>}></Route>
       <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>

  </div>
  );
}

export default App;
