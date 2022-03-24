import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsList from "./components/ProductsList";
import Product from "./pages/Product";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavbarComponent />
      <Routes>
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/registro" element={<Register />} /> */}
        <Route path="/productos" element={<ProductsList />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/carrito-de-compras" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
