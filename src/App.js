import "./css/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WritingPage from "./pages/WritingPage";
import TestPage from "./pages/TestPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/write" element={<WritingPage/>}></Route>
          <Route path="/test" element={<TestPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
