import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactUs from './Components/ContactUs';

function App() {


  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
