import "./css/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/post" element={<PostPage/>}></Route>
          <Route path="/test" element={<TestPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
