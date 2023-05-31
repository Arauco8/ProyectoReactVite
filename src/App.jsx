/* eslint-disable no-unused-vars */
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import ClassComponent from './components/ClassComponent'
import { useState } from 'react'
import Cart from './Pages/Cart'
import Form from './Pages/Form'


function App() {

  const [cart, setCart] = useState([])
  
  return (
    <>
      <Navbar/>
      <Cart cart={cart}/>
      <Home setCart={setCart} cart={cart}/>
      <Form/>
    </>
  )
}

export default App
