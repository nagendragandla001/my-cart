export const APP_ROUTES = [
  {
    path: "/",
    component: () => import("../pages/Home"),
  },
  {
    path: "/login",
    component: () => import("../pages/Login"),
  },
  {
    path: "/about",
    component: () => import("../pages/About"),
  },
  {
    path: "/contact",
    component: () => import("../pages/Contact"),
  },
  {
    path: "/products",
    component: () => import("../pages/Products"),
  },
  {
    path: "/products/:id",
    component: () => import("../pages/ProductDetails"),
  },
  {
    path: "*",
    component: () => import("../pages/NotFound"),
  },
];
