<template>
  <header
    class="home-header"
    :class="{
      'sticky-top': $route.path.match(/\/order/),
      transparent: $route.path == '/',
    }"
  >
    <div class="home-header__content">
      <NuxtLink to="/" class="home-header__logo">
        <img src="/images/le_maharaja.png" alt="" />
      </NuxtLink>
      <div class="home-header__navigation">
        <NuxtLink to="/" active-class="active" exact>{{ $t("Home") }}</NuxtLink>
        <NuxtLink to="/order" active-class="active" @click="showMenu = false">{{
          $t("The Map")
        }}</NuxtLink>
        <NuxtLink
          to="/contact"
          active-class="active"
          @click="showMenu = false"
          >{{ $t("Contact") }}</NuxtLink
        >
      </div>
      <div class="home-header__login">
        <a href="tel:06 66 26 83 41">
          <font-awesome-icon
            icon="fa-solid fa-phone-volume"
            flip="horizontal"
            class="phone-call"
          />
        </a>
        <button
          @click="auth._showLogin = !auth._showLogin"
          v-if="!auth._isAuthenticated"
        >
          {{ $t("Login") }}
        </button>
        <button @click="showProfile = !showProfile" v-else>
          {{ $t("Profile") }}
        </button>
        <div @click="show = !show" class="home-header__login__cart">
          <font-awesome-icon
            class="cart-icon"
            icon="fa-solid fa-cart-shopping"
          />
          <span>{{ cart.cart.length }}</span>
        </div>
        <div @click="openNav">
          <font-awesome-icon class="menu-icon" icon="fa-solid fa-bars" />
        </div>
      </div>
      <!-- mobile navigation -->
      <div :class="{ open: isOpen }" class="home-header__mobile-nav">
        <span @click.stop="closeNav" class="home-header__mobile-nav__close"
          >&times;</span
        >
        <div class="home-header__mobile-nav__content">
          <NuxtLink @click="closeNav" to="/" active-class="active" exact
            >home</NuxtLink
          >
          <NuxtLink @click="closeNav" to="/order" active-class="active"
            >Order</NuxtLink
          >
          <NuxtLink @click="closeNav" to="/contact" active-class="active"
            >contact</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>

  <footer class="m-sticky-footer">
    <button
      class="m-sticky-footer__button"
      @click="$router.push('/')"
      :class="{ active: $route.path == '/' }"
    >
      <font-awesome-icon icon="fa-solid fa-home" />
    </button>
    <button
      class="m-sticky-footer__button"
      @click="$router.push('/order')"
      :class="{ active: $route.path == '/order' }"
    >
      <font-awesome-icon icon="fa-solid fa-burger" />
    </button>
    <button
      class="m-sticky-footer__button"
      @click="show = !show"
      :class="{ active: show }"
    >
      <font-awesome-icon icon="fa-solid fa-shopping-cart" />
      <span>{{ cart.cart.length }}</span>
    </button>
    <button
      class="m-sticky-footer__button"
      @click="$router.push('/contact')"
      :class="{ active: $route.path == '/contact' }"
    >
      <font-awesome-icon icon="fa-solid fa-phone-volume" />
    </button>
    <button
      class="m-sticky-footer__button"
      @click="auth._showLogin = !auth._showLogin"
      v-if="!auth._isAuthenticated"
    >
      <font-awesome-icon icon="fa-solid fa-user" />
    </button>
    <button
      class="m-sticky-footer__button"
      @click="showProfile = !showProfile"
      :class="{ active: showProfile }"
      v-else
    >
      <font-awesome-icon icon="fa-solid fa-user" />
    </button>
  </footer>

  <CartItems v-model="show" @confirm="show = false" @cancel="show = false" />
  <LoginModal v-model="auth._showLogin" />
  <ProfileModal v-if="showProfile" v-model="showProfile" />
</template>

<script setup lang="ts">
import { useAuthStore } from "~~/store/Auth";
import { useCartStore } from "~~/store/Cart";

const cart = useCartStore();
const auth = useAuthStore();
const { locale } = useI18n();

locale.value = "fr";

const isOpen = ref(false);

const openNav = () => {
  isOpen.value = true;
};

const closeNav = () => {
  isOpen.value = false;
};

const show = ref(false);
const showMenu = ref(false);
const showProfile = ref(false);
</script>

<style lang="scss">
.home-header {
  width: 100%;
  background: var(--primary-light);
  z-index: 999;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 5.5rem;
      height: 5.5rem;
      background: transparent;
    }
  }

  &__navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.875rem;
    a {
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 100%;
      cursor: pointer;
      color: var(--primary-color);

      &:hover {
        color: var(--text-gray);
      }
    }
  }

  // mobile navigation: start
  &__mobile-nav {
    transform: translateX(100%);
    visibility: hidden;
    opacity: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--primary-light);
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.5s linear;
    z-index: 1010;
    &__close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 2.5rem;
      font-weight: normal;
      color: var(--text-black);
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100vh;
      gap: 2rem;
      a {
        text-decoration: none;
        text-transform: capitalize;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 100%;
        cursor: pointer;
        color: var(--primary-color);

        &:hover {
          color: var(--text-gray);
        }
      }
    }
  }
  // mobile navigation: end

  &__login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    .phone-call {
      font-size: 22px;
      color: var(--primary-color);
      cursor: pointer;
      display: none;
    }
    .menu-icon {
      font-size: 24px;
      color: var(--primary-color);
      cursor: pointer;
      display: none;
    }
    button {
      padding: 0.625rem 1.5rem;
      outline: none;
      border-radius: 8px;
      border: 1px solid transparent;
      background: var(--primary-color);
      color: #fff;
      text-transform: capitalize;
      font-size: 1.125rem;
      font-weight: 500;
      font-style: normal;
      line-height: 100%;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
      }
    }

    &__cart {
      position: relative;
      cursor: pointer;
      .cart-icon {
        font-size: 35px;
        color: var(--primary-color);
      }
      span {
        color: var(--primary-color);
        background-color: var(--white-color);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -8px;
        right: -5px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-header {
    padding: 0 1rem;

    &.transparent {
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;

      .home-header__logo {
        width: 100%;
        display: flex;
        justify-content: center;

        img {
          margin-left: 2rem;
        }
      }
    }

    &__login {
      gap: 1.5rem;
      .phone-call {
        display: none;
      }
      .menu-icon {
        display: block;
      }
      button {
        padding: 0.6rem;
        letter-spacing: 1px;
        font-size: 0.9rem;
        display: none;
      }

      &__cart {
        display: none;
        position: relative;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
        }
        span {
          width: 1rem;
          height: 1rem;
          top: -4px;
          right: -5px;
          font-size: 0.8rem;
        }
      }
    }
    &__navigation {
      display: none;
    }

    &__mobile-nav {
      &.open {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
      }
    }

    &__mobile-nav-icon {
      display: block;
      .menu-icon {
        font-size: 24px;
        color: var(--primary-color);
      }
    }
  }
}

@media screen and (min-width: 768.099px) and (max-width: 1200px) {
  .home-header {
    &__content {
      padding: 0 1rem;
    }

    &__navigation {
      gap: 1.5rem;
      a {
        font-size: 1rem;
      }
    }

    &__login {
      gap: 2rem;
      button {
        padding: 0.7rem;
        font-size: 1rem;
        letter-spacing: 0.5px;
      }
      &__cart {
        margin-right: 0.3rem;
      }
    }
  }
}

.m-sticky-footer {
  display: none;
}

@media screen and (max-width: 768px) {
  .m-sticky-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background-color: var(--primary-light);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    box-shadow: 0px -2px 20px #0000001c;
    &__button {
      position: relative;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: var(--primary-color);
      &:hover {
        color: var(--text-gray);
      }

      span {
        font-size: 0.9rem;
        color: var(--primary-color);
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -5px;
        right: -10px;
      }
    }
  }

  .home-footer__bottom__area {
    margin-bottom: 4rem !important;
  }
}

.sticky-top {
  position: sticky;
  top: 0;
  right: 0;
  box-shadow: -2px 0 20px #0000001c;

  .home-header__content {
    max-width: 100%;
    width: 100%;
    padding: 0 1rem;
  }
}
.active {
  color: var(--text-gray) !important;
}
</style>
