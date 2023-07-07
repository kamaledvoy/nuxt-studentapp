export default defineNuxtRouteMiddleware(async (to, from) => {
  // TODO: Setup Global middleware in order
  console.log("#SetupGlobal: Middleware");

  // TODO: Error handling

  //   if (to.path === "/auth/login") {
  //     throw createError({
  //       statusCode: 405,
  //       statusMessage: "Login page Error! Please try again",
  //     });
  //   }

  //   try {
  //     const data: any = await useFetch("/api/this-path");
  //     return navigateTo("/account/profile/" + data?.user?.name);
  //   } catch (error: any) {
  //     abortNavigation(error);
  //   }
});
