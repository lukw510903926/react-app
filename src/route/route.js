import ReactForm from "../components/Form";
import Login from "../components/Login";
import ProductList from "../components/page/Product/ProductList";
import Product from "../components/page/Product/Product";
import NotFound from "../components/404";
import TabList from "../components/page/TabList";


const routes = [

  {
    key: "sub1", path: "/login", title: "组件", type: "setting",isMenu: true,
    children: [
      { key: "/login", path: "/login", name: Login, title: "登录页", auth: false, isMenu: false },
      { key: "/home/form", path: "/home/form", name: ReactForm, title: "表单", auth: false, isMenu: true },
      { key: "/home/product/list",path: "/home/product/list",name: ProductList,title: "产品列表",auth: false,isMenu: true },
      { key: "/home/product", path: "/home/product", name: Product, title: "添加产品", auth: true, isMenu: false },
      { key: "/home/404", path: "/home/404", name: NotFound, title: "页面未找到", auth: true, isMenu: false },
      { key: "/home/tabList", path: "/home/tabList", name: TabList, title: "TabList", auth: true, isMenu: true }
    ]
  }
];
export default routes;
