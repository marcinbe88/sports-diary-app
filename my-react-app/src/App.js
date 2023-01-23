import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { UserPanelSee } from "./views/UserPanelSee";
import { UserPanelAdd } from "./views/UserPanelAdd";
import { UserPanelSet } from "./views/UserPanelSet";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userpanel-seeresult" element={<UserPanelSee />} />
          <Route path="/userpanel-addresult" element={<UserPanelAdd />} />
          <Route path="/userpanel-settings" element={<UserPanelSet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
