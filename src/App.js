import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Home from './components/mainpage/page'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>}
          />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
