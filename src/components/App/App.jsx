import { Routes, Route, Link } from 'react-router-dom'
import { Courses } from '../Courses/Courses';
import { HomePage } from '../HomePage/HomePage';





function App() {


  return (
    <>
      <Routes>
        <Route path='/createx' element={<HomePage />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
      </Routes >
    </>
  );
}

export default App;
