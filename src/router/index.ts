import Vue from "vue";
import Router from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(Router);

// 页面滚动配置
/* const scrollBehavior = (to: Route, from: Route, savedPosition: void | Position) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}; */

// 懒加载路由
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/article",
    name: "article",
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/pages/Article.vue")
  },
  {
    path: "/example",
    name: "example",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/pages/Example.vue")
  },
  {
    path: "/components",
    name: "components",
    component: () =>
      import(
        /* webpackChunkName: "components" */ "../views/pages/Components.vue"
      )
  },
  {
    path: "/music",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "music" */ "../views/pages/Music.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/pages/About.vue")
  },
  {
    path: '*',
    name: "about",
    component: () => import(/* webpackChunkName: "404" */ "../views/pages/404.vue")
  }
];

export default new Router({
  // hash路由以#号分割，history则为常规url
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  // scrollBehavior,
  routes
});
