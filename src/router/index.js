import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tour from "../views/Tour.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/#",
    name: "First Page",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/facilities",
    name: "Facilities",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Facilities.vue"),
  },
  {
    path: "/tour",
    name: "Tour",
    component: Tour,
  },
  {
    path: "/contact",
    name: "Concontact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
