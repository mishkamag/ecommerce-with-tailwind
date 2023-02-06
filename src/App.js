import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import CategoryDetails from "./pages/CategoryDetails";
import { AuthContextProvider } from "./store/AuthContext";
import AdminAuth from "./pages/AdminAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminHomePage from "./pages/AdminHomePage";
import Invoice from "./pages/Invoice";

const AppLayout = ({ children }) => (
  <div className="overflow-hidden">
    <Header />
    {children}
    <SideBar />
    <Footer />
  </div>
);

const AdminLayout = ({ children }) => (
  <div className="overflow-hidden">{children}</div>
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

            <Route
              path="/admin/authentication"
              element={
                <AdminLayout>
                  <AdminAuth />
                </AdminLayout>
              }
            />

            <Route
              path="/admin/home"
              element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminHomePage />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
