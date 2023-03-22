import React from 'react'
import './generalStyles.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />


      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        

        
      </Routes>


      <Footer />

    </>
  );
}

export default App;
