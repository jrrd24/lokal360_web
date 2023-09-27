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
import CustomersShop from "./pages/Shop/CustomersShop/CustomersShop";
import OrdersShop from "./pages/Shop/OrdersShop/OrdersShop";
import ShopInfo from "./pages/Shop/ShopInfo/ShopInfo";
import PromosShop from "./pages/Shop/PromosShop/PromosShop";
import LokalAdsShop from "./pages/Shop/LokalAdsShop/LokalAdsShop";
import VouchersShop from "./pages/Shop/VouchersShop/VouchersShop";
import theme from "./Theme";
import { ThemeProvider } from "@emotion/react";
import PartnerShop from "./pages/Shop/PartnerShop/PartnerShop";
import EmployeeManagement from "./pages/Shop/EmployeeManagement/EmployeeManagement";
import SettingsShop from "./pages/Shop/SettingsShop/SettingsShop";
import ShopCategory from "./pages/Shop/ShopCategory/ShopCategory";
import { DateRangeProvider } from "./contexts/DateRangeContext";
import ProductPage from "./pages/Shop/ProductsShop/ProductPage/ProductPage";
import OrderPage from "./pages/Shop/OrdersShop/OrderPage/OrderPage";
import "./css/scrollbar.css";
function App() {
  return (
    <DateRangeProvider>
      <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth="100%">
          <div className="App custom-scrollbar">
            <Routes>
              {/*Login */}
              <Route path="/" element={<DashboardShop />} />
              {/*Admin */}
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
              {/*Shop */}
              <Route path="/shop/login" element={<Login />} />
              <Route path="/shop/analytics" element={<AnalyticsShop />} />
              <Route path="/shop/products" element={<ProductsShop />} />
              <Route
                path="/shop/products/shop_category"
                element={<ShopCategory />}
              />
              <Route path="/shop/customers" element={<CustomersShop />} />
              <Route path="/shop/orders" element={<OrdersShop />} />
              <Route path="/shop/shop_info" element={<ShopInfo />} />
              <Route path="/shop/promos" element={<PromosShop />} />
              <Route path="/shop/lokal_ads" element={<LokalAdsShop />} />
              <Route path="/shop/vouchers" element={<VouchersShop />} />
              <Route path="/shop/360_partner" element={<PartnerShop />} />
              <Route path="/shop/settings" element={<SettingsShop />} />
              <Route
                path="/shop/employee_management"
                element={<EmployeeManagement />}
              />
              <Route
                path="/shop/products/product_page/:productID"
                element={<ProductPage />}
              />
              <Route
                path="/shop/orders/order_page/:orderID"
                element={<OrderPage />}
              />
              {/*Display Error page if route does not exist */}
              <Route path="*" element={<RouterError />} />
            </Routes>
          </div>
        </Container>
      </ThemeProvider>
    </DateRangeProvider>
  );
}

export default App;
