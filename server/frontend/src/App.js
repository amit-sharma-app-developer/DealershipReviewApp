import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navbar/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from "./components/Dealers/Dealers";
import DealerDetails from "./components/DealerDetails/DealerDetails";
import AddReview from "./components/AddReview/AddReview";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/dealer/:id" element={<DealerDetails />} />
        <Route path="/dealer/:id/add-review" element={<AddReview />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;