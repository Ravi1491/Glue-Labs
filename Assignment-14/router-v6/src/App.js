
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Home from './Components/Home'
import Courses from './Components/Courses'
import AllCourses from './Components/AllCourses'
import Bundles from './Components/Bundles'
import SingleCourse from './Components/SingleCourse';
import Dashboard from './Components/Dashboard';


function App() {
  return (
  <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/apps" element={<Navigate replace to='/courses'/>}/>
        <Route path="/courses" element={<Courses/>}>
          <Route path='allcourses' element={<AllCourses/>}>
               <Route path=":id" element={<SingleCourse/>}/>
            </Route>
          <Route path='bundles' element={<Bundles/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
    </Routes>
  </Router>
  );
}

export default App;
