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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import About from './Pages/About/About';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/manageInventory" element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path="/addItems" element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } />
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path="/inventory/:serviceId" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/update/:id" element={
          <RequireAuth>
            <Update />
          </RequireAuth>
        } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
