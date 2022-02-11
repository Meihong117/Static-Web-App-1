import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetSpecificUrs from './components/GetSpecificUrs';
import GetUsers from './components/GetUsers'

function App() {
  return (
   <Router>
     <Routes>
       {/* Route new version(6) */}
        <Route exact path="/" element={<GetUsers />}/> 
        <Route path="/user/:id" element={<GetSpecificUrs />}/>
     </Routes>
   </Router>
  );
}

export default App;
