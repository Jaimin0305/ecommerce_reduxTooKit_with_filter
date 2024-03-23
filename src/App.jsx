import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
    </Routes>
    </BrowserRouter>
      
    <Toaster/>
    </>
  )
}

export default App