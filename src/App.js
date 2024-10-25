
import TypeOfCourses from './Component/Courses/pages/TypeOfCourses';
import NavBar from './Component/NavBar/NavBar';
import Home from './Home';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
 <Router>
  <NavBar/>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Courses' element={<TypeOfCourses />}/>

   </Routes>
  
 </Router>
  </>
  );
}

export default App;
