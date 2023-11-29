import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import Facts from "./pages/Facts";

const App = () => {
  const location = useLocation();

  return (
    <main className="min-h-[100vh] overflow-hidden bg-offwhite">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default App;
