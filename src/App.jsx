import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="App d-flex flex-column">
      <NavbarComponent />
      <Routes>
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:slug" element={<Product />} />
        <Route path="/carrito-de-compras" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categoria/:name" element={<Category />} />
        <Route path="/gracias" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
