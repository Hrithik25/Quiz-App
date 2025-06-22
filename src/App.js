// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
