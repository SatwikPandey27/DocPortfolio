import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Home from './components/mainpage/page'
import About1 from './components/about/aboutdrnikhil'

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
          <Route path='/drnikhil' element={ <> <Navbar/> <About1/> </> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
