import { Container } from "@mui/material";
import "./App.css";
import Login from "./pages/login/Login.js";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Analytics from "./pages/Admin/Analytics/Analytics";
import Reports from "./pages/Admin/Reports/Reports";
import Category from "./pages/Admin/Category/Category";
import ShopsManagement from "./pages/Admin/ShopsManagement/ShopsManagement";
import LokalAds from "./pages/Admin/LokalAds/LokalAds";
import Users from "./pages/Admin/Users/Users";
import Settings from "./pages/Admin/Settings/Settings";
import RouterError from "./pages/Error/RouterError";
import { Route, Routes } from "react-router-dom";
import DashboardShop from "./pages/Shop/DashboardShop/DashboardShop";
import AnalyticsShop from "./pages/Shop/AnalyticsShop/AnalyticsShop";
import ProductsShop from "./pages/Shop/ProductsShop/ProductsShop";
import theme from "./Theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="100%">
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/analytics" element={<Analytics />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/category" element={<Category />} />
            <Route
              path="/admin/shop_management"
              element={<ShopsManagement />}
            />
            <Route path="/admin/lokal_ads" element={<LokalAds />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/shop/dashboard" element={<DashboardShop />} />
            <Route path="/shop/analytics" element={<AnalyticsShop />} />
            <Route path="/shop/products" element={<ProductsShop />} />

            {/*Display Error page if route does not exist */}
            <Route path="*" element={<RouterError />} />
          </Routes>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
