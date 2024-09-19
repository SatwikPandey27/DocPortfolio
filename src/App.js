import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import Home from './components/mainpage/page'
import About1 from './components/about/aboutdrnikhil'
import About2 from './components/about/aboutdrrajesh'
import About3 from './components/about/aboutkhushboo'

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
          <Route path='/drrajesh' element={ <> <Navbar/> <About2/> </> } />
          <Route path='/drkhushboo' element={ <> <Navbar/> <About3/> </> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
