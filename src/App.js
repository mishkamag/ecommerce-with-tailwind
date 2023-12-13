import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import CategoryDetails from "./pages/CategoryDetails";
import { AuthContextProvider } from "./store/AuthContext";
import Invoice from "./pages/Invoice";
import NotFoundPage from "./pages/NotFoundPage";

const AppLayout = ({ children }) => (
  <div className="overflow-hidden">
    <Header />
    {children}
    <SideBar />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <AppLayout>
                  <Home />
                </AppLayout>
              }
            />

            <Route path="/invoice" element={<Invoice />} />
            <Route
              path="/product/:id"
              element={
                <AppLayout>
                  <ProductDetails />
                </AppLayout>
              }
            />
            <Route
              path="/category/:category"
              element={
                <AppLayout>
                  <CategoryDetails />
                </AppLayout>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
