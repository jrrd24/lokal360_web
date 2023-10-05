import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/ForRoute/RequireAuth.js";
//Login Page
import Login from "./pages/login/Login.js";
//Admin Page
import Dashboard from "./pages/Admin/Dashboard/Dashboard.js";
import Analytics from "./pages/Admin/Analytics/Analytics.js";
import Reports from "./pages/Admin/Reports/Reports.js";
import Category from "./pages/Admin/Category/Category.js";
import ShopsManagement from "./pages/Admin/ShopsManagement/ShopsManagement.js";
import LokalAds from "./pages/Admin/LokalAds/LokalAds.js";
import Users from "./pages/Admin/Users/Users.js";
import Settings from "./pages/Admin/Settings/Settings.js";
//Error Page
import RouterError from "./pages/Error/RouterError.js";
//Shop Page
import DashboardShop from "./pages/Shop/DashboardShop/DashboardShop.js";
import AnalyticsShop from "./pages/Shop/AnalyticsShop/AnalyticsShop.js";
import ProductsShop from "./pages/Shop/ProductsShop/ProductsShop.js";
import CustomersShop from "./pages/Shop/CustomersShop/CustomersShop.js";
import OrdersShop from "./pages/Shop/OrdersShop/OrdersShop.js";
import ShopInfo from "./pages/Shop/ShopInfo/ShopInfo.js";
import PromosShop from "./pages/Shop/PromosShop/PromosShop.js";
import LokalAdsShop from "./pages/Shop/LokalAdsShop/LokalAdsShop.js";
import VouchersShop from "./pages/Shop/VouchersShop/VouchersShop.js";
import PartnerShop from "./pages/Shop/PartnerShop/PartnerShop.js";
import EmployeeManagement from "./pages/Shop/EmployeeManagement/EmployeeManagement.js";
import SettingsShop from "./pages/Shop/SettingsShop/SettingsShop.js";
import ShopCategory from "./pages/Shop/ShopCategory/ShopCategory.js";
import ProductPage from "./pages/Shop/ProductsShop/ProductPage/ProductPage.js";
import OrderPage from "./pages/Shop/OrdersShop/OrderPage/OrderPage.js";
import RouterUnauthorized from "./pages/Error/RouterUnauthorized.js";

function Router() {
  return (
    <Routes>
      {/*Login */}
      <Route path="/login" element={<Login />} />

      <Route element={<RequireAuth allowedRoles={"shop owner"} />}>
        {/*Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/shop_management" element={<ShopsManagement />} />
        <Route path="/admin/lokal_ads" element={<LokalAds />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/settings" element={<Settings />} />
        {/*Shop */}
        <Route path="/" element={<DashboardShop />} />
        <Route path="/shop/analytics" element={<AnalyticsShop />} />
        <Route path="/shop/products" element={<ProductsShop />} />
        <Route path="/shop/products/shop_category" element={<ShopCategory />} />
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
      </Route>

      {/*Display Unauthorized page  */}
      <Route path="/unauthorized" element={<RouterUnauthorized />} />
      {/*Display Error page if route does not exist */}
      <Route path="*" element={<RouterError />} />
    </Routes>
  );
}

export default Router;
