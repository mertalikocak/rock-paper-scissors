import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./pages/Game";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="main">
            <Routes>
              <Route path="/" element={<Game />} />
            </Routes>
          </div>
          <div className="footer">
            <span>Mert Ali Koçak-2022</span>
            <a href="https://github.com/mertalikocak" target="blank">
              <AiFillGithub />
              GitHub
            </a>
            <a href="https://linkedin.com/in/mertalikocak" target="blank">
              <AiFillLinkedin />
              Linkedin
            </a>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
