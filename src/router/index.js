import Vue from "vue";
import Router from "vue-router";

const result_page = (resolve) => require(["@/pages/result_page"], resolve);

Vue.use(Router);

const router = new Router({
  routes: [
  {
    path: "/result_page",
    name: "日程签到",
    component: result_page
  }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
