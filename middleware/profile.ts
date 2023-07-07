export default defineNuxtRouteMiddleware((to, from) => {
  console.log("#Analytics: Middleware");
  const isAuthenticated = useCookie("is-authenticated");
  const currentUser = useCookie("current-user");

  if (!isAuthenticated.value && !currentUser.value) {
    return navigateTo("/auth/login");
  } else if (to.params.username !== currentUser.value) {
    return navigateTo("/account/profile/" + currentUser.value);
  }
});
