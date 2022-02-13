import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import GetSpecificUrs from './components/GetSpecificUrs';
import GetUsers from './components/GetUsers'
import PostUser from './components/PostUser';
// import Container from 'react-bootstrap/Container'

function App() {
  return (
   <Router>
    
       <Routes>
       {/* Route new version(6) */}
        <Route exact path="/" element={<GetUsers />}/> 
        <Route path="/user/:id" element={<GetSpecificUrs />}/>
        {/* <Route path="/postuser" element={<PostUser />}/> */}
      </Routes>
    
     
   </Router>
  );
}

export default App;
