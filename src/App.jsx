import About from "./pages/about/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Service from "./pages/services/service";
import Careers from "./pages/careers/careers";
import Blogs from "./pages/blogs/blogs";
import Error from "./pages/Erorr/Error";
import Product from "./pages/products/Product";
import Single from "./pages/single/Single";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
