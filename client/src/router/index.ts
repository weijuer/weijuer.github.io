import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

// 页面滚动配置
const scrollBehavior = (
  to: Router,
  from: Router,
  savedPosition: void | Position
) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

// 懒加载路由
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/articles.shtml",
    name: "articles",
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/Articles.vue"),
    children: [
      {
        path: "article-detail/:id.shtml",
        name: "article-detail",
        component: () =>
          import(
            /* webpackChunkName: "article-details" */ "../views/article/article-details.vue"
          )
      }
    ]
  },
  {
    path: "/example.shtml",
    name: "example",
    component: () =>
      import(/* webpackChunkName: "example" */ "../views/Example.vue")
  },
  {
    path: "/components.shtml",
    name: "components",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/Components.vue")
  },
  {
    path: "/news.shtml",
    name: "news",
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue")
  },
  {
    path: "/music.shtml",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "music" */ "../views/Music.vue")
  },
  {
    path: "/about.shtml",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  }
];

export default new Router({
  // hash路由以#号分割，history则为常规url
  mode: "hash",
  base: process.env.BASE_URL,
  // linkActiveClass: 'active',
  linkExactActiveClass: "active",
  // scrollBehavior,
  routes
});
