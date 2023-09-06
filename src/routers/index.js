import Home from "~/page/Home";
import Category from "~/page/Category";
import Detail from "~/page/Detail";
import Cart from "~/page/Cart";
import Login from "~/page/Login";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/detail", component: Detail },
  { path: "/login", component: Login },
  { path: "/cart", component: Cart },
];

const privateRouters = [];
export { publicRoutes, privateRouters };
