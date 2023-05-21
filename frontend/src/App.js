import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Views/Home.js';
import LoginOrSignup from './Views/LoginOrSignup.js';
import axios from 'axios';

//Set withCredentials to always allows to set credentials
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-or-signup" element={<LoginOrSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
