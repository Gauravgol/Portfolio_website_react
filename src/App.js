import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

function App() {


  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>

    </Router>
  );
}


export default App;
