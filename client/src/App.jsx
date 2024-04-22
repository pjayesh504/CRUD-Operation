import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Users'
import Create from './Components/CreateUser'
import Update from './Components/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello Jayesh, Happy coding</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
