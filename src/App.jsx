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
import Error404 from "./pages/404";
import MyOrders from "./pages/MyOrders";
import PrivateRoute from "./components/PrivateRoute";

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
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route
          path="/checkout"
          element={<PrivateRoute element={<Checkout />} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compras" element={<MyOrders />} />
        <Route path="/categoria/:name" element={<Category />} />
        <Route path="/gracias" element={<ThankYou />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
