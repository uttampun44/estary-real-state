import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'

function App() {


  return (
      <BrowserRouter>
          <>
           <Routes>
               <Route  path='/' element={<Home />}></Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/signup' element={<Signup />}></Route>
           </Routes>
         </>
     </BrowserRouter>
  )
}

export default App
