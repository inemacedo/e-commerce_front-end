import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsList from "./components/ProductsList";
import Product from "./pages/Product";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registro" element={<Register />} /> */}
        <Route path="/productos" element={<ProductsList />} />
        <Route path="/producto" element={<Product />} />
        {/* <Route path="/sobre-nosotros" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
