import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavbarComponent />
      <Routes>
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito-de-compras" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
