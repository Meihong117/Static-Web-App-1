import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import GetSpecificUrs from './components/GetSpecificUrs';
import GetUsers from './components/GetUsers'
import PostUser from './components/PostUser';
import Login from './components/Login';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/NavBar/SideBar';
import Home from './components/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
   <Router>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle} />
      
      <Routes>
      {/* Route new version(6) */}
        <Route exact path="/" element={<Home />}/> 
        <Route path="/users" element={<GetUsers />}/> 
        <Route path="/user/:id" element={<GetSpecificUrs />}/>
        <Route path="/postuser" element={<PostUser />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
   </Router>
  );
}

export default App;
