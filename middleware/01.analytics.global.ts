export default defineNuxtRouteMiddleware((to, from) => {
  // TODO: Global middleware add suffix to run first in order 0 and alphanumeric
  console.log("#Analytics: Middleware");
  console.log("to", to);
  console.log("from", from);
});
