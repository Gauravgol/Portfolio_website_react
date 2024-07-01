import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';

function App() {


  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
