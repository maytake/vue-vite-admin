import { createWebHistory, createRouter } from "vue-router";

// 公共路由
export const constantRoutes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error/401"),
    hidden: true,
  },
  {
    path: "/index",
    component: () => import("@/views/index"),
    name: "Index",
    meta: { title: "首页", icon: "dashboard", affix: true },
  },
];



const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
