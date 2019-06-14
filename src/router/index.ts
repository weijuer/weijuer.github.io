import Vue from "vue";
import Router from "vue-router";
import Home from "../views/pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
    }
  ]
});
