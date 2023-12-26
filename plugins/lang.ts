export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.beforeEach((to, from, next) => {
    nuxtApp.$i18n.locale.value = 'fr';
    next();
  });
});
