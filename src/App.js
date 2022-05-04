import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory/:serviceId" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
