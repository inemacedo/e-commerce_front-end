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
import EditProfile from "./pages/EditProfile";
import FloatingAboutUs from "./components/FloatingAboutUs";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

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
        <Route path="/mi-perfil" element={<Profile />} />
        <Route path="/mis-compras" element={<MyOrders />} />
        <Route path="/editar-perfil" element={<EditProfile />} />
        <Route path="/categoria/:name" element={<Category />} />
        <Route path="/gracias" element={<ThankYou />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FloatingAboutUs />
      <Footer />
    </div>
  );
}

export default App;
