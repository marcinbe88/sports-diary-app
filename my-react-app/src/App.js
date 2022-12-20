import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
