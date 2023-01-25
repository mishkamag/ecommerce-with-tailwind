import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <SideBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
