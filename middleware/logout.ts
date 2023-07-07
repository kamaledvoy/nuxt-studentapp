export default defineNuxtRouteMiddleware((to, from) => {
  console.log("#Logout: Middleware");

  const isAuthenticated = useCookie("is-authenticated");
  const currentUser = useCookie("current-user");

  isAuthenticated.value = "";
  currentUser.value = "";

  return navigateTo("/");
});
