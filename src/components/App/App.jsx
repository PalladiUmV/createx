import { Routes, Route, Link } from 'react-router-dom'
import { About } from '../About/AboutPage';
import { Courses } from '../Courses/Courses';
import { Events } from '../Events/Events';
import { HomePage } from '../HomePage/HomePage';





function App() {


  return (
    <>
      <Routes>
        <Route path='/createx' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes >
    </>
  );
}

export default App;
