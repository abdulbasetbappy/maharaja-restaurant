import { defineRule, Form, Field, ErrorMessage } from "vee-validate";

defineRule("required", (value) => {
  if (value == false) {
    // return "This field is required.";
    // translate to french
    return "Ce champ est requis.";
  }
  return true;
});

defineRule("null", (value) => {
  if (value === null || value === undefined || value === "") {
    return true;
  }
});

defineRule("optional", () => {
  return true;
});

defineRule("email", (value) => {
  if (!value) {
    return true;
  }
  // regex from https://emailregex.com/
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(value)) {
    // return "This field must be a valid email";
    // translate to french
    return "Ce champ doit être un email valide";
  }
  return true;
});

defineRule("min", (value, [length]) => {
  if (!value) {
    return true;
  }
  if (value.length < length) {
    // return `This field must be at least ${length} characters`;
    // translate to french
    return `Ce champ doit contenir au moins ${length} caractères`;
  }
  return true;
});

defineRule("max", (value, [length]) => {
  if (!value) {
    return true;
  }
  if (value.length > length) {
    // return `This field must be at most ${length} characters`;
    // translate to french
    return `Ce champ doit contenir au plus ${length} caractères`;
  }
  return true;
});

defineRule("phone", (value) => {
  if (!value) {
    return true;
  }
  const regex = /^\+?[0-9]{8,}$/;
  if (!regex.test(value)) {
    // return "This field must be a valid phone number";
    // translate to french
    return "Ce champ doit être un numéro de téléphone valide";
  }
  return true;
});

// make vee-validate work with nuxt 3
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Form", Form);
  nuxtApp.vueApp.component("Field", Field);
  nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
});
