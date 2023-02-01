import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import CategoryDetails from "./pages/CategoryDetails";
import { AuthContextProvider } from "./store/AuthContext";
import AdminAuth from "./pages/AdminAuth";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category" element={<CategoryDetails />} />
          <Route
            path="/admin/authentication"
            element={
              <AuthContextProvider>
                <AdminAuth />
              </AuthContextProvider>
            }
          />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
