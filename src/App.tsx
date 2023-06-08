import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/login/RegistrationPage';
import Home from './pages/Home';
import './stylesheets/App.css';
// import { fakeAuthProvider } from "./auth";
const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<LoginPage/>} />
        </Routes>
      </Router>
  );
};
export default App;