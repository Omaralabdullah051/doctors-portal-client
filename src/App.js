import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appoinment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
