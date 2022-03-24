import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
