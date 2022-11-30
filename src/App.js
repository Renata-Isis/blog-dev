//Config React Router
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post"
import NotFound from "./pages/NotFound/NotFound";

//NavBar
import NavBar from "./components/NavBar";

function App() {
  
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slug=/:slug" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
