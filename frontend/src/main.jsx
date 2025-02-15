
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import './index.css'
import ReactDOM from "react-dom/client";

import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Auth/Login.jsx"
import Register from "./pages/Auth/Register.jsx";
import Profile from "./pages/User/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from "./pages/Admin/AdminRoute.jsx";
import UserList from "./pages/Admin/UserList.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
      {/* <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} /> */}

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
       {/*  <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />*/}
      </Route> 

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
       {/*  <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />*/}
      </Route> 
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>


      <RouterProvider router={router} />
      </Provider >



)
