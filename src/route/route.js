import ReactForm from "@/components/Form";
import Login from "@/components/Login";
import ProductList from "@/components/page/Product/ProductList";
import Product from '@/components/page/Product/Product';
import NotFound from "@/components/404";
import TabList from "@/components/page/TabList";

import User from '@/components/page/system/User'
import Resource from '@/components/page/system/Resource'
import Role from '@/components/page/system/Role'


const routes = [
  { key: "/home/404", path: "/home/404", name: NotFound, title: "页面未找到", auth: true, isMenu: false },
  { key: "/login", path: "/login", name: Login, title: "登录页", auth: false, isMenu: false },
  {
    key: "product", title: "产品管理", type: "star",isMenu: true,
    children: [
      { key: "/home/product/form", path: "/home/product/form", name: ReactForm, title: "表单", auth: false, isMenu: true },
      { key: "/home/product/list",path: "/home/product/list",name: ProductList,title: "产品列表",auth: false,isMenu: true },
      { key: "/home/product/add", path: "/home/product/add", name: Product, title: "添加产品", auth: true, isMenu: false },
      { key: "/home/product/tabList", path: "/home/product/tabList", name: TabList, title: "TabList", auth: true, isMenu: true }
    ]
  },
  {
    key: "system", title: "系统管理", type: "setting",isMenu: true,
    children: [
      { key: "/home/system/user",path: "/home/system/user",name: User,title: "用户管理",auth: false,isMenu: true },
      { key: "/home/system/resource", path: "/home/system/resource", name: Resource, title: "资源管理", auth: true, isMenu: true },
      { key: "/home/system/role", path: "/home/system/role", name: Role, title: "角色管理", auth: true, isMenu: true }
    ]
  }
];
export default routes;
