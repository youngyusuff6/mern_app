import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import axios from 'axios';


axios.default.baseUrl = 'http://localhost:8000';
axios.default.withCredentials = true;

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </>
  )
}

export default App
