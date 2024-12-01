import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import NavbarDet from "./components/navbar/navdet";
import Home from "./components/mainpage/page";
import About1 from "./components/about/aboutdrnikhil";
import About2 from "./components/about/aboutdrrajesh";
import About3 from "./components/about/aboutkhushboo";
// import Blog from './components/blog/blog'
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/drnikhil"
            element={
              <>
                {" "}
                <NavbarDet /> <About1 />{" "}
              </>
            }
          />
          <Route
            path="/drrajesh"
            element={
              <>
                {" "}
                <NavbarDet /> <About2 />{" "}
              </>
            }
          />
          <Route
            path="/drkhushboo"
            element={
              <>
                {" "}
                <NavbarDet /> <About3 />{" "}
              </>
            }
          />
          {/* <Route path='/blog' element={ <> <NavbarDet/> <Blog/> </> } /> */}
          <Route
            path="/gallery"
            element={
              <>
                {" "}
                <NavbarDet /> <Gallery />{" "}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
