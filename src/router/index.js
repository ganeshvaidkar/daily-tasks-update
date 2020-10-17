import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/employee",
    name: "Employee",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Employeefield.vue"),
  },
  {
    path: "/popup",
    name: "Popup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Popupwindow.vue"),
  },
  {
    path: "/nymbleup",
    name: "Nymbleup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Nymbleuplogin.vue"),
  },

  {
    path: "/exercise",
    name: "Exercise",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise.vue"),
  },
  {
    path: "/exercise2",
    name: "Exercise2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise2.vue"),
  },

  {
    path: "/exercise3",
    name: "Exercise3",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise3.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Weather.vue"),
  },

  {
    path: "/exercise4",
    name: "Exercise4",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise4.vue"),
  },
  {
    path: "/exercise5",
    name: "Exercise5",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise5.vue"),
  },
  {
    path: "/exercise6",
    name: "Exercise6",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Exercise6.vue"),
  },
  {
    path: "/exercisegraph",
    name: "ExerciseGraph",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExerciseGraph.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
