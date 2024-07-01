import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {


  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
