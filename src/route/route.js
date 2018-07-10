import Grid from "../components/Grid";
import ReactForm from "../components/Form";
import Login from "../components/Login";
import ProductList from "../components/page/Product/ProductList";
import Product from "../components/page/Product/Product";

const routes = [
  { path: "/login", name: Login,  title: "登录页", auth: false },
  { path: "/table", name: Grid,   title: "表格", auth: false },
  { path: "/form", name: ReactForm,   title: "登录页", auth: true },
  { path: "/product/list", name: ProductList,  title: "登录页", auth: true },
  { path: "/product", name: Product,   title: "登录页", auth: true },
  { path: "/login", name: Login,   title: "登录页", auth: false }
];
export default routes;
