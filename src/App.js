import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { Product } from "./Pages/Product/Product";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/ShopiN" element={<Home/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
