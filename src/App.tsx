import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 import image from './assets/black.avif';
import About from './components/About';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav2 from './components/Nav2'
import Contact from './components/contact';
import ResumePage from './components/Resume';
 

function App() {
  
  return (
    <div className="app h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <BrowserRouter>
    <Nav2/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<h1>Projects</h1>}></Route>
          <Route path='/resume' element={<ResumePage />}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
   

