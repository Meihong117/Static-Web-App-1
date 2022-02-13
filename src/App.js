import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetSpecificUrs from './components/GetSpecificUrs';
import GetUsers from './components/GetUsers'
import PostUser from './components/PostUser';

function App() {
  return (
   <Router>
     <Routes>
       {/* Route new version(6) */}
        <Route exact path="/" element={<GetUsers />}/> 
        <Route exact path="/user/:id" element={<GetSpecificUrs />}/>
        {/* <Route path="/postuser" element={<PostUser />}/> */}

     </Routes>
   </Router>
  );
}

export default App;
