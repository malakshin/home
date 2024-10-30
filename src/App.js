
import TypeOfCourses from './Component/Courses/pages/TypeOfCourses';
import Footer from './Component/Footer/Footer';
import NavBar from './Component/NavBar/NavBar';
import Home from './Home'
import Login from './Component/Login/Login'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
 <Router>
  <NavBar/>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Courses' element={<TypeOfCourses />}/>
    <Route path='/Logout' element={<Login />}/>
    
   </Routes>
   <Footer/>
 </Router>
  </>
  );
}

export default App;

