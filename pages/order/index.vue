<template>
  <div class="i-menu-page">
    <div class="i-menu-left">
      <div class="menu-categories-fixed active">
        <div class="container">
          <ul class="menu-category-items">
            <li v-for="(cat, i) in allCategories" class="menu-category-item">
              <a
                :href="`#${stringToID(cat.name)}`"
                :data-id="cat.id"
                @click.prevent="goTo(cat.id)"
                :class="{ active: cat.id == activeCategory }"
                v-if="cat.products.length"
                >{{ cat.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          class="category"
          v-for="(category, i) in allCategories"
          :key="i"
          :id="stringToID(category.name)"
        >
          <h2
            class="category-title"
            :data-id="category.id"
            v-if="category.products.length"
          >
            {{ category.name }}
          </h2>
          <div class="products" v-if="category.products.length">
            <div
              class="product"
              v-for="(product, j) in category.products"
              :key="j"
              @click="openModal(product)"
            >
              <div>
                <h2 class="product-title">{{ product.name }}</h2>
                <p class="product-desc">
                  {{ product.description }}
                </p>
                <h2 class="product-price">
                  <span class="product-price-currency">{{
                    useAppConfig().currencySymbol
                  }}</span>
                  {{ product?.price?.price_delivery }}
                </h2>
              </div>
              <div>
                <img
                  v-if="product.image"
                  :src="`${useAppConfig().apiRoot}${product.image}`"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CartModal
          v-model="show"
          :product="activeProduct"
          :show="show"
          @confirm="show = false"
          @cancel="show = false"
        >
        </CartModal>
      </div>
    </div>
    <div class="i-menu-right">
      <div class="i-cart-header">
        <div class="i-switch-shipping">
          <span>{{ $t("Delivery") }}</span>

          <label class="i-switch">
            <input
              type="checkbox"
              v-model="cart._is_pickup"
              @change="togglePickup()"
            />
            <span class="i-slider i-round"></span>
          </label>

          <span>{{ $t("Pickup") }}</span>
        </div>

        <div class="i-cart-time">
          <div class="i-icon">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M12,22 C7.02943725,22 3,17.9705627 3,13 C3,8.02943725 7.02943725,4 12,4 C16.9705627,4 21,8.02943725 21,13 C21,17.9705627 16.9705627,22 12,22 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M11.9630156,7.5 L12.0475062,7.5 C12.3043819,7.5 12.5194647,7.69464724 12.5450248,7.95024814 L13,12.5 L16.2480695,14.3560397 C16.403857,14.4450611 16.5,14.6107328 16.5,14.7901613 L16.5,15 C16.5,15.2109164 16.3290185,15.3818979 16.1181021,15.3818979 C16.0841582,15.3818979 16.0503659,15.3773725 16.0176181,15.3684413 L11.3986612,14.1087258 C11.1672824,14.0456225 11.0132986,13.8271186 11.0316926,13.5879956 L11.4644883,7.96165175 C11.4845267,7.70115317 11.7017474,7.5 11.9630156,7.5 Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          {{ $t("20-30 min") }}
        </div>

        <h5 class="fw-bold text-center">{{ $t("Items in your cart") }}</h5>
      </div>

      <div class="i-cart-items" v-if="cart?.cart?.length">
        <!-- [Start]: Free -->

        <div
          class="i-cart-item"
          v-for="(item, index) in cart?._freeItems"
          :key="index"
        >
          <div class="i-cart-item-info">
            <h5 class="fw-bold mb-1">
              {{ item?.quantity }} x {{ getSize(item) }}
              {{ trimText(item.name, 18) }}
            </h5>
            <!-- <p class="text-muted m-0">
              <span v-if="getOptions(item)">
                With
                {{ trimText(getOptions(item), 50) || " " }}
              </span>
            </p> -->
          </div>
          <div class="i-cart-item-action">
            <h5 class="i-cart-item-price fw-bold m-0">{{ $t("FREE") }}</h5>
          </div>

          <div
            class="i-cart-item-remove"
            style="opacity: 0.7; cursor: not-allowed"
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z"
                  fill="currentColor"
                  fill-rule="nonzero"
                />
                <path
                  d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </g>
            </svg>
          </div>
        </div>
        <!-- [End]: Free -->

        <div
          class="i-cart-item"
          v-for="(item, index) in cart?.cart"
          :key="index"
        >
          <div class="i-cart-item-info">
            <h5 class="fw-bold mb-1">
              {{ item?.quantity }} x {{ getSize(item) }}
              {{ trimText(item.name, 18) }}
            </h5>
            <!-- <p class="text-muted m-0">
              <span v-if="getOptions(item)">
                With
                {{ trimText(getOptions(item), 50) || " " }}
              </span>
            </p> -->

            <div class="i-cart-item-options">
              <div
                class="i-cart-item-option"
                v-for="(opt, i) in item?.options"
                :key="i"
                v-show="opt?.selected > 0"
              >
                <span class="i-cart-item-option-title">{{ opt?.name }}:</span>
                <div class="i-cart-item-option-values">
                  <div
                    class="i-cart-item-option-value"
                    v-for="(val, j) in opt?.options"
                    :key="j"
                  >
                    <span class="i-cart-item-option-value-name">
                      {{ val?.name }}
                      <span
                        class="i-cart-item-option-value-count"
                        v-if="val.quantity > 0"
                        >x {{ val?.quantity }} </span
                      >:
                    </span>

                    <span class="i-cart-item-option-value-price"
                      >{{ $currency
                      }}{{
                        parseFloat(
                          (val?.price * val?.quantity).toString()
                        ).toFixed(2)
                      }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="i-cart-item-action">
            <h5 class="i-cart-item-price fw-bold">
              {{ $currency }}{{ getPrice(item) }}
            </h5>
            <div class="i-cart-item-count">
              <button
                class="i-cart-item-count-btn"
                :disabled="item?.quantity == 1"
                @click="
                  item.quantity--;
                  cart.updateCart();
                "
              >
                -
              </button>
              <span class="i-cart-item-count-value">{{ item?.quantity }}</span>
              <button
                class="i-cart-item-count-btn"
                @click="
                  item.quantity++;
                  cart.updateCart();
                "
              >
                +
              </button>
            </div>
          </div>

          <div class="i-cart-item-remove" @click="removeCartItem(index)">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <path
                  d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z"
                  fill="currentColor"
                  fill-rule="nonzero"
                />
                <path
                  d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div class="i-cart-items" v-else>
        <div class="i-empty-icon mt-4">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            transform="scale(2)"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24" />
              <path
                d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z"
                fill="var(--bs-danger)"
                fill-rule="nonzero"
                opacity="0.3"
              />
            </g>
          </svg>
        </div>
        <h5 class="fw-bold text-center mt-4 text-muted">
          {{ $t("Your cart is empty") }}
        </h5>
      </div>

      <div class="i-cart-summary" v-if="cart?.subtotal > 0">
        <div class="i-cart-summary-item fw-bold">
          <span>{{ $t("Subtotal") }}</span>
          <span
            >{{ $currency
            }}{{ parseFloat(cart?.subtotal?.toString())?.toFixed(2) }}</span
          >
        </div>
        <div class="i-cart-summary-item" v-if="cart?.delivery > 0">
          <span>{{ $t("Delivery") }}</span>
          <span
            >{{ $currency
            }}{{ parseFloat(cart?.delivery?.toString())?.toFixed(2) }}</span
          >
        </div>
        <div class="i-cart-summary-item" v-if="cart?.tax > 0">
          <span>{{ $t("Tax") }}</span>
          <span
            >{{ $currency
            }}{{ parseFloat(cart?.tax?.toString())?.toFixed(2) }}</span
          >
        </div>
        <div class="i-cart-summary-item" v-if="cart?.discount > 0">
          <span>{{ $t("Discount") }}</span>
          <span
            >{{ $currency
            }}{{ parseFloat(cart?.discount?.toString())?.toFixed(2) }}</span
          >
        </div>
        <div class="i-cart-summary-item fw-bold">
          <span>{{ $t("Total") }}</span>
          <span
            >{{ $currency
            }}{{ parseFloat(cart?.total?.toString())?.toFixed(2) }}</span
          >
        </div>

        <span
          class="text-danger"
          v-if="cart.subtotal < settings.getCartMinimum"
        >
          {{ $t("Cart value is less than required amount") }}
          {{ settings.getCartMinimum }}
        </span>
      </div>

      <div class="i-cart-action">
        <button
          class="btn btn-lg w-100"
          :disabled="
            cart?.cart?.length == 0 || cart.subtotal < settings.getCartMinimum
          "
          @click="$router.push('/checkout')"
          v-if="auth.isAuthenticated"
        >
          {{ $t("Checkout") }}
        </button>
        <button
          class="btn btn-lg w-100"
          v-else
          @click="auth._showLogin = !auth._showLogin"
        >
          {{ $t("Login to Checkout") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useMenuStore } from "~~/store/Menu";
import { useCartStore } from "~~/store/Cart";

/* eslint-disable-next-line */
// @ts-ignore
import InView from "@opuu/inview";
import { useAuthStore } from "~~/store/Auth";
import { useSettingStore } from "~~/store/Settings";

export default defineNuxtComponent({
  name: "MenusView",
  head() {
    return {
      title: "Menu - Le Maharaja",
    };
  },
  data() {
    return {
      activeCategory: null,
      activeLocation: null,
      show: false,
      showLocation: false,
      activeProduct: {},
    };
  },
  computed: {
    currentCategory() {
      return (
        this.menus.mappedCategories?.find(
          (category) => category.id === this.activeCategory
        ) || {
          products: [],
        }
      );
    },
    allCategories() {
      return this.menus?.mappedCategories;
    },

    popular() {
      let items = [];

      this.allCategories.forEach((category) => {
        category.products.forEach((product) => {
          items.push(product);
        });
      });

      items = items.sort((a, b) => {
        return b.score - a.score;
      });

      items = items.slice(0, 8);

      if (items?.length < 8) {
        items = items.slice(0, 4);
      }

      return items; // return 8 or 4 items
    },
  },
  methods: {
    currentLocation() {
      const loc = this.settings?.settings?.locations?.find(
        (loc) =>
          loc.id == window.localStorage.getItem("_location") ||
          this.settings?.settings?.locations[0].id
      );

      return `${loc?.city}, ${loc?.state} ${loc?.zip}`;
    },
    currentDeliveryZone() {
      const loc = this.settings?.settings?.delivery_zones?.find(
        (zone) =>
          zone.id == window.localStorage.getItem("_delivery_zone") ||
          this.settings?.settings?.delivery_zones[0].id
      );

      return `${loc?.city}, ${loc?.state} ${loc?.zip}`;
    },
    trimText(text: string, length: number) {
      return text?.length > length ? text.substring(0, length) + "..." : text;
    },
    stringToID(text: string) {
      // convert any string to kebab-case-id removing all special characters
      return (
        text
          .toLowerCase()
          // remove all special characters
          .replace(/[^a-zA-Z0-9 ]/g, "")
          // replace all spaces with -
          .replace(/\s+/g, "-")
      );
    },
    getOptions(cartItem) {
      let options = [];
      cartItem.options.forEach((option) => {
        if (option.selected) {
          options.push(option.name);
        }
      });

      return options.join(", ");
    },
    getSize(cartItem) {
      let option = cartItem?.options?.find(
        (option) => option.name.trim() == "Size"
      );

      return option?.options[0]?.name;
    },
    getPrice(cartItem) {
      let product_price =
        parseFloat(
          this.cart.is_pickup
            ? cartItem?.price?.price_pickup
            : cartItem?.price?.price_delivery
        ) * cartItem.quantity;

      let options_price = 0;
      cartItem?.options.forEach((option) => {
        if (option?.options?.length) {
          option.options.forEach((option) => {
            options_price +=
              parseFloat(option.price) * option?.quantity * cartItem.quantity;
          });
        }
      });

      return (product_price + options_price).toFixed(2);
    },
    openModal(product) {
      this.activeProduct = product;
      this.show = true;
    },
    togglePickup() {
      this.cart.updateCart();
    },
    addToCart(product) {
      this.cart.addToCart(product);
      this.cart.updateCart();
    },
    removeCartItem(index) {
      this.cart.removeCartItem(index);
      this.cart.updateCart();
    },
    goTo(cat_id) {
      this.pauseInView();
      // bring it to viewport
      document
        .querySelector(`.category-title[data-id="${cat_id}"]`)
        .scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      document
        .querySelectorAll(
          `.menu-categories-fixed a[data-id], .menu-categories a[data-id]`
        )
        .forEach((el) => {
          el.classList.remove("active");
        });
      document
        .querySelector(`.menu-categories-fixed a[data-id="${cat_id}"]`)
        .classList.add("active");
      document
        .querySelector(`.menu-categories a[data-id="${cat_id}"]`)
        .classList.add("active");
      this.resumeInView();
    },
    pauseInView() {
      // eslint-disable-next-line
      // @ts-ignore
      window.InView.pause();
    },
    resumeInView() {
      setTimeout(() => {
        // eslint-disable-next-line
        // @ts-ignore
        window.InView.resume();
      }, 1000);
    },
  },
  mounted() {
    window.setTimeout(() => {
      // if .menu-categories is not in view, add active class to .menu-categories-fixed
      let menu_categories: HTMLElement =
        document.querySelector(".menu-categories");
      let x_scroll: HTMLElement = document.querySelector(
        ".menu-categories-fixed"
      );

      // check if current scroll position is greater than .menu-categories offset top
      window.addEventListener("scroll", () => {
        if (window.scrollY > menu_categories.offsetTop) {
          x_scroll.classList.add("active");
          menu_categories.classList.remove("active");
        } else {
          x_scroll.classList.remove("active");
          menu_categories.classList.add("active");
        }
      });

      // on mouse click and move scroll the menu items
      x_scroll?.addEventListener("mousedown", (e) => {
        x_scroll.style.scrollBehavior = "unset";
        let x = e.clientX;
        let scrollLeft = x_scroll?.scrollLeft;
        x_scroll.addEventListener("mousemove", move);
        x_scroll.addEventListener("mouseup", () => {
          x_scroll.removeEventListener("mousemove", move);
        });
        x_scroll.addEventListener("mouseleave", () => {
          x_scroll.removeEventListener("mousemove", move);
        });
        function move(e) {
          let x2 = e.clientX;
          let walk = x - x2;
          x_scroll.scrollLeft = scrollLeft + walk;
        }
      });
      // smooth scroll on mouse wheel
      x_scroll?.addEventListener("wheel", (e: WheelEvent) => {
        e.preventDefault();
        x_scroll.style.scrollBehavior = "smooth";
        x_scroll.scrollLeft += e.deltaY * 2;
      });
    }, 3000);
    window.setTimeout(() => {
      let elements = new InView(".category-title", 2000);
      // eslint-disable-next-line
      // @ts-ignore
      window.InView = elements;
      // add enter event listener
      elements.on("enter", (event) => {
        if (event.percentage == 100) {
          this.activeCategory = parseInt(event.target.dataset.id);
          // scroll i-categories div horizontally to the active category
          let x_scroll: HTMLElement = document.querySelector(
            ".menu-categories-fixed"
          );
          let x_scroll2: HTMLElement =
            document.querySelector(".menu-categories");
          let y_scroll: HTMLElement = document.querySelector(
            `[data-id="${this.activeCategory}"]`
          );
          x_scroll.scrollTo({
            left: y_scroll.offsetLeft - 50,
            behavior: "smooth",
          });
          x_scroll2.scrollTo({
            left: y_scroll.offsetLeft - 50,
            behavior: "smooth",
          });
        }
      });
      // scroll to id if hash is present in url
      // get #id from url
      let hash = window.location.hash;
      hash = hash.trim();
      if (hash) {
        this.goTo(document.querySelector("[href='" + hash + "']")?.dataset?.id);
      }
    }, 3000);
  },
  unmounted() {
    // remove all event listeners
    window.removeEventListener("scroll", () => {});
    window.removeEventListener("mousedown", () => {});
    window.removeEventListener("mouseup", () => {});
    window.removeEventListener("mouseleave", () => {});
    window.removeEventListener("wheel", () => {});
  },
  setup() {
    const menus = useMenuStore();
    const cart = useCartStore();
    const auth = useAuthStore();
    const settings = useSettingStore();
    cart.fetchOffers();

    let old_cart = window.localStorage.getItem("_cart");
    let last_time = new Date(window.localStorage.getItem("_last_time"));
    let now_time = new Date();

    if (old_cart && old_cart.startsWith("[") && old_cart.endsWith("]")) {
      if (last_time.getDate() == now_time.getDate()) {
        cart._cart = JSON.parse(old_cart);
      }
    }

    cart.updateCart();

    return {
      menus,
      cart,
      auth,
      settings,
    };
  },
});
</script>

<style lang="scss" scoped>
.i-menu-page {
  background-color: var(--bg-gray);
  display: flex;
  flex-direction: row;
}

.i-menu-page .i-menu-left {
  width: 70vw;
}
.logo-bottom {
  background: var(--primary-color);
  padding: 11px 20px;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 108px;
  margin-left: 8px;

  &-sec {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-black);
      text-decoration: none;
      width: 100%;

      .left {
        h4 {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0px;
        }

        p {
          font-size: 12px;
          margin-bottom: 0px;
          line-height: 1;
          margin-top: 0.5rem;
        }
      }

      .right {
        h4 {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 0px;
        }
      }
    }
  }
}

.open h2 {
  text-align: left;
  color: var(--text-black);
  font-size: 22px;
  letter-spacing: 1px;
  margin-left: 10px;
  display: block;
  margin-top: 90px;
  margin-bottom: 90px;
}
.menu-categories {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 20px;
  visibility: hidden;

  &::-webkit-scrollbar {
    height: 3px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(61, 61, 61, 0.298);
    border-radius: 10px;
  }

  &.active {
    visibility: visible;
  }

  .menu-category-items {
    display: flex;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 6.5rem;
    z-index: 100;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: 100vw;
      height: 1px;
      background: rgba(61, 61, 61, 0.298);
      margin-top: 4rem;
    }

    .menu-category-item {
      list-style: none;
      margin-right: 1rem;

      &:empty {
        display: none;
      }

      a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
        padding: 0.7rem;
        border-radius: 10px;
        &:hover {
          background-color: var(--primary-light);
          color: var(--text-black);
        }
        &::after {
          content: "";
          display: block;
          width: 0%;
          height: 2px;
          background: var(--primary-color);
          margin-top: 5px;
          transition: width 0.3s;
        }

        &:hover,
        &.active {
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: var(--primary-color);
            margin-top: 5px;
          }
        }
      }
    }
  }
}

.menu-categories-fixed {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: sticky;
  width: 70vw;
  visibility: hidden;
  top: 6.5rem;
  z-index: 999;
  background: var(--primary-light);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  &.active {
    visibility: visible;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar {
    height: 3px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(61, 61, 61, 0.298);
    border-radius: 10px;
  }

  .menu-category-items {
    display: flex;
    align-items: center;
    width: 100%;

    .menu-category-item {
      list-style: none;
      margin-right: 1rem;

      &:empty {
        display: none;
      }

      a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
        padding: 0.7rem;
        &:hover {
          color: var(--text-black);
        }

        &::after {
          content: "";
          display: block;
          width: 0%;
          height: 2px;
          background: var(--text-black);
          margin-top: 5px;
          transition: width 0.3s;
        }

        &:hover,
        &.active {
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: var(--text-black);
            margin-top: 5px;
          }
        }
      }
    }
  }
}

.category {
  margin: 5rem 1rem;
  padding: 1.3rem;
  background-color: var(--bg-light);
  border-radius: 1.5rem;
  &:first-child {
    margin-top: 2rem;
  }
  &:last-child {
    margin-bottom: 0;
  }

  &:empty {
    display: none;
  }

  .category-title {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-gray) !important;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    // 1 column on small devices
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .product {
      display: flex;
      justify-content: space-between;
      background: var(--bg-gray);
      border-radius: 5px;
      padding: 1rem;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 1rem;

      div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
      }

      div:last-child {
        height: 100px;
        aspect-ratio: 1;
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &:hover {
        opacity: 0.8;
      }

      * {
        color: var(--text-black);
      }

      .product-title {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 0px;
        color: var(--primary-color);
      }
      .product-desc {
        font-size: 14px;
        margin-bottom: 0px;
        line-height: 1;
        margin-top: 0.5rem;
        color: var(--text-light);
      }
      .product-price {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0px;
        margin-top: 0.5rem;
        font-weight: bold;
        color: var(--primary-color);

        .product-price-currency {
          font-size: 1rem;
          font-weight: bold;
          color: var(--primary-color);
        }
      }
    }
  }
}

.i-menu-right {
  box-shadow: -2px 0 20px #0000001c;
  height: calc(100dvh - 6.5rem);
  overflow: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  position: sticky;
  top: 6.5rem;
  right: 0;
  width: 29.45vw;
  z-index: 998;
  background-color: var(--bg-gray);

  .i-cart-header {
    padding: 1.5rem 2rem 0 2rem;
    color: var(--text-light);

    .i-switch-shipping {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      span {
        font-size: 1rem;
        font-weight: 500;
        color: var(--primary-color);
      }

      .i-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;

        input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .i-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--text-light);
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .i-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:active + .i-slider::before {
          width: 20px;
        }

        input:checked + .i-slider {
          background-color: var(--primary-color);
        }

        input:focus + .i-slider {
          box-shadow: 0 0 1px var(--primary-color);
        }

        input:checked + .i-slider:before {
          -webkit-transform: translateX(16px);
          -ms-transform: translateX(16px);
          transform: translateX(16px);
        }

        /* Rounded sliders */
        .i-slider.i-round {
          border-radius: 50px;
        }

        .i-slider.i-round:before {
          border-radius: 50px;
        }
      }
    }

    h5 {
      color: var(--text-light);
    }

    .i-cart-time {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      padding: 1rem 0;

      .i-icon {
        width: 24px;
        height: 24px;
        color: var(--primary-color);

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .i-cart-items {
    display: flex;
    padding: 1rem 2rem;
    flex-direction: column;

    .i-empty-icon {
      display: flex;
      justify-content: center;
    }

    .i-cart-item {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid var(--primary-light);

      &:last-child {
        border-bottom: none;
      }

      width: 100%;

      .i-cart-item-image {
        width: 60px;
        height: 60px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      }

      .i-cart-item-info {
        flex: 1;
        display: flex;
        flex-direction: column;

        h5 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0;
          color: var(--primary-color);
        }

        p {
          font-size: 0.8rem;
          margin-bottom: 0;
          color: var(--text-light);
        }
      }

      .i-cart-item-action {
        display: flex;
        flex-direction: column;
        align-items: center;

        h5 {
          color: var(--primary-color);
        }
      }

      .i-cart-item-count {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        font-weight: bold;

        .i-cart-item-count-value {
          width: fit-content;
          text-align: center;
          color: var(--text-light);
        }

        .i-cart-item-count-btn {
          height: 1.5rem;
          aspect-ratio: 1;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-weight: bold;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          background: var(--bs-body-bg);

          &:hover {
            background: var(--primary-color);
            color: var(--text-black);
          }

          transition: all 0.2s ease-in-out;
        }
      }

      .i-cart-item-remove {
        width: 24px;
        height: 24px;
        cursor: pointer;

        color: var(--bs-danger);

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .i-cart-summary {
    padding: 1rem 2rem;

    .i-cart-summary-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.5rem 0;
      color: var(--primary-color);
      font-size: 16px;
      span::first-child {
        color: var(--text-light);
      }

      &:last-child {
        border-top: 1px solid var(--text-light);
        font-size: 20px;
      }
    }
  }

  .i-cart-item-options {
    color: var(--bs-white);
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    .i-cart-item-option {
      display: block;
      width: 100%;

      .i-cart-item-option-title {
        font-weight: bold;
        font-size: 1rem;
        color: var(--text-gray);
      }

      .i-cart-item-option-value {
        display: flex;
        align-items: center;

        .i-cart-item-option-value-name {
          font-size: 0.8rem;
        }

        .i-cart-item-option-value-price {
          font-size: 0.8rem;
          font-weight: bold;
          color: var(--bs-primary);
          margin-left: 5px;
        }

        .i-cart-item-option-value-count {
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 2px;
        }
      }
    }
  }

  .i-cart-action {
    padding: 1rem 2rem;

    button {
      width: 100%;
      padding: 0.5rem 0;
      border-radius: 10px;
      border: 2px solid var(--primary-color);
      background: var(--primary-color);
      color: var(--text-gray);
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--bs-body-bg);
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .i-menu-page {
    .i-menu-right {
      display: none;
    }
    .i-menu-left {
      width: 100vw;
      .menu-categories-fixed {
        width: 100vw;
      }
    }
  }
  .category {
    margin: 3rem 1rem;
  }
}
</style>
