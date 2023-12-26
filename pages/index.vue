<template>
  <div>
    <section class="home-hero">
      <video
        class="background-clip"
        src="~/assets/five-chicken-video.mp4"
        loop
        autoplay
      ></video>
      <div class="home-hero__content">
        <div class="home-hero__left">
          <h1>
            {{ $t("Meet, Eat & Enjoy The") }} <span>{{ $t("True Taste") }}</span
            >.
          </h1>
          <p>{{ $t("Discover India's Rich Culinary Tapestry Right Here") }}</p>

          <div class="home-hero__details">
            <div class="home-hero__details__delivery__type">
              <button
                :class="{ active: !cart.is_pickup }"
                @click="cart._is_pickup = false"
                class="home-hero__details__delivery__type__btn"
              >
                {{ $t("Delivery") }}
              </button>
              <span>or</span>
              <button
                :class="{ active: cart.is_pickup }"
                @click="cart._is_pickup = true"
                class="home-hero__details__delivery__type__btn"
              >
                {{ $t("Pickup") }}
              </button>
            </div>
            <div class="home-hero__details__location" v-if="cart.is_pickup">
              <select
                class="home-hero__details__location__select"
                name="location"
                id="location"
                ref="location"
                @change="goToLocation($event.target?.value)"
              >
                <option value="0" disabled selected>
                  {{ $t("Select Location") }}
                </option>
                <option
                  v-for="(location, key) in settings?.settings?.locations"
                  :key="key"
                  :value="location.id"
                >
                  {{ location.address }}, {{ location.city }} -
                  {{ location.zip }},
                  {{ location.state }}
                </option>
              </select>
            </div>

            <div class="home-hero__details__location" v-else>
              <select
                class="home-hero__details__location__select"
                name="location"
                id="location"
                ref="location"
                @change="goToLocation($event.target?.value)"
              >
                <option value="0" disabled selected>
                  {{ $t("Select location") }}
                </option>
                <option
                  v-for="(location, key) in settings?.settings?.delivery_zones"
                  :key="key"
                  :value="location.id"
                >
                  {{ location.city }} - {{ location.zip }}, {{ location.state }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="home-hero__right">
          <img src="/images/big-biriyani-plate.png" alt="" />
        </div>
      </div>

      <!--bottom wave: start-->
      <div class="custom-shape-divider-bottom-1703021672">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <!--bottom wave: end-->
    </section>

    <section class="home-feature">
      <div class="home-feature__content">
        <div class="home-feature__card">
          <div class="home-feature__card__top">
            <img src="/images/icon-supplier.png" alt="" />
            <h5>{{ $t("ease of ordering") }}</h5>
          </div>
          <p>{{ $t("Effortless meal selection and easy.") }}</p>
        </div>
        <div class="home-feature__card">
          <div class="home-feature__card__top">
            <img src="/images/icon-best-seller.png" alt="" />
            <h5>{{ $t("best quality") }}</h5>
          </div>
          <p>{{ $t("Finest ingredients, exceptional taste.") }}</p>
        </div>
        <div class="home-feature__card">
          <div class="home-feature__card__top">
            <img src="/images/icon-truck.png" alt="" />
            <h5>{{ $t("quick delivery") }}</h5>
          </div>
          <p>{{ $t("Speedy delivery for your cravings.") }}</p>
        </div>
      </div>
    </section>

    <section class="home-discover">
      <div class="home-discover__content">
        <div class="home-discover__left">
          <img src="/images/rounded-food-items.png" alt="" />
        </div>
        <div class="home-discover__right">
          <h2>
            {{ $t("Embark on a Flavorful Journey Through India's Cuisine") }}
          </h2>
          <p>
            {{
              $t(
                "Explore Our Culinary Tapestry: From Crisp Salads to Spiced Tandoori, Savor Every Bite of India in France!"
              )
            }}
          </p>
          <NuxtLink to="/order">
            <button>{{ $t("Order Now") }}</button>
          </NuxtLink>
        </div>
      </div>
      <!--Curve top: start-->
      <div class="wave-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <!--Curve top: end-->
      <!--Curve bottom: start-->
      <div class="wave-bottom">
        <svg
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <!--Curve bottom: end-->
    </section>

    <section class="home-popular-food">
      <div class="home-popular-food__content">
        <div class="home-popular-food__top">
          <h2>
            <span>{{ $t("Crowd Favorites:") }}</span
            ><br />
            {{ $t("Savory Treasures From Our Kitchen") }}
          </h2>
          <p>
            {{ $t("Indulge in the Most-Loved Creations Loved by Our Patrons") }}
          </p>
        </div>
        <div class="home-popular-food__middle">
          <div
            class="home-popular-food__middle__card"
            v-for="product in popularProducts"
            @click="
              (e) => {
                activeProduct = product;
                show = true;
              }
            "
          >
            <img :src="useAppConfig().apiRoot + product.image" alt="" />
            <div class="home-popular-food__middle__card__info">
              <h5>{{ product.name }}</h5>
              <p>{{ product.description }}</p>
              <span
                >{{ useAppConfig().currencySymbol
                }}{{ product.price.price_delivery }}</span
              >
            </div>
          </div>
        </div>
        <div class="home-popular-food__bottom">
          <button>
            {{ $t("View All Item") }}
            <img src="/images/right-arrow.png" alt="" />
          </button>
        </div>
      </div>
    </section>

    <section class="home-inspiration">
      <div class="home-inspiration__content">
        <div class="home-inspiration__left">
          <h2>
            <span>{{ $t("Culinary Creativity:") }}</span> <br />{{
              $t("Where Tradition Meets Innovation")
            }}
          </h2>
          <p>
            {{
              $t(
                "Uncover the Fusion of Authentic Flavors and Modern Elegance in Indian Cuisine at Le Maharaja"
              )
            }}
          </p>
          <NuxtLink to="/order">
            <button>{{ $t("To Start") }}</button>
          </NuxtLink>
        </div>
        <div class="home-inspiration__right">
          <img src="/images/table-full-food.jpg" alt="" />
        </div>
      </div>
      <!--top wave: start-->
      <div class="inspiration-wave">
        <svg
          data-name="Layer 4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <!--top wave: end-->
    </section>

    <section class="home-delivery-area">
      <div class="home-delivery-area__content">
        <div class="home-delivery-area__top">
          <h2>{{ $t("Our Delivery Area") }}</h2>
        </div>
        <div class="home-delivery-area__bottom">
          <div
            v-for="location in delivery_zones"
            @click="goToLocation(location.id)"
            :key="location.id"
            class="home-delivery-area__bottom__card"
          >
            <font-awesome-icon class="location-icon" icon="fa-solid fa-location-dot" />
            <span>{{ location.city }} - {{ location.zip }}</span>
          </div>
        </div>
      </div>
    </section>

    <CartModal
      v-if="activeProduct"
      v-model="show"
      :product="activeProduct"
      :show="show"
      @confirm="show = false"
      @cancel="show = false"
    >
    </CartModal>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~~/store/Cart";
import { useMenuStore } from "~~/store/Menu";
import { useSettingStore } from "~~/store/Settings";

useHead({
  title: "Home - Le Palais de Raja Maharaja",
});

const menus = useMenuStore();
const settings = useSettingStore();
const cart = useCartStore();

const show = ref(false);
const activeProduct = ref(null);

const stringToID = (text: String) => {
  // convert any string to kebab-case-id removing all special characters
  return (
    text
      .toLowerCase()
      // remove all special characters
      .replace(/[^a-zA-Z0-9 ]/g, "")
      // replace all spaces with -
      .replace(/\s+/g, "-")
  );
};

const goToLocation = (location: any) => {
  if (cart.is_pickup) {
    window.localStorage.setItem("_location", location);
    navigateTo(`/order/?location=${location}`);
  } else {
    // get the delivery zone
    const delivery_zone = settings?.settings?.delivery_zones?.find(
      (zone: any) => zone.id == location
    );

    window.localStorage.setItem("_location", delivery_zone.handled_by);
    window.localStorage.setItem("_delivery_zone", location);
    navigateTo(`/order/?location=${delivery_zone.handled_by}`);
  }
};

const delivery_zones = computed(() => {
  let length = settings?.settings?.delivery_zones?.length;
  let delivery_zones = settings?.settings?.delivery_zones;

  if (length > 8) {
    return delivery_zones.slice(0, 11);
  } else if (length < 8) {
    return delivery_zones.slice(0, 7);
  }
});

const popularProducts = computed(() => {
  let products = menus?.products;

  if (products) {
    return products.sort((a: any, b: any) => b.score - a.score).slice(0, 9);
  } else {
    return [];
  }
});

// const popularCategories = computed(() => {
//   let categories = menus?.categories;

//   if (categories) {
//     return categories.sort((a: any, b: any) => b.score - a.score);
//   } else {
//     return [];
//   }
// });
</script>

<style lang="scss" scoped>
// animation for forward spinning
@keyframes spinForward {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.home-hero {
  width: 100%;
  background: var(--primary-light);
  position: relative;
  video {
    display: none;
  }
  &__content {
    max-width: 1200px;
    margin: 0 auto;
    height: calc(100vh - 6.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  &__left {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3.7rem;
      font-weight: bolder;
      color: var(--text-black);
      line-height: 120%;
      font-style: normal;
      text-transform: capitalize;
      span {
        color: var(--primary-color);
      }
    }
    p {
      width: 90%;
      text-align: justify;
      font-size: 1.15rem;
      font-weight: 400;
      line-height: 130%;
    }
  }
  .background-clip {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
  }

  &__details {
    width: 90%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;

    &__location {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.625rem;
      background: var(--white-color);
      border-radius: 0.5rem;
      width: 100%;

      &__select {
        flex: 1;
        appearance: none;
        display: block;
        border: none;
        border-radius: 8px;
        color: var(--text-gray);
        padding: 0.5rem 1rem;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        option {
          color: var(--text-gray);
          padding: 10px;
          letter-spacing: 1px;
        }
        &:focus {
          outline: none;
        }
      }
    }

    &__delivery__type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &__btn {
        flex: 1;
        padding: 20px 25px;
        outline: none;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        background: transparent;
        color: var(--primary-color);
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        line-height: 100%;
        transition: all 0.3s;
        cursor: pointer;
        letter-spacing: 1px;
        &:hover {
          background: var(--primary-color);
          color: var(--white-color);
          border: 1px solid transparent;
        }
        &.active {
          background: var(--primary-color);
          color: var(--white-color);
          border: 1px solid transparent;
        }
      }

      span {
        margin: 0 1rem;
        font-size: 20px;
        color: var(--text-black);
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }

  &__right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 33.75rem;
      object-fit: cover;
      animation: spinForward 20s linear infinite;
    }
  }

  // hero wave: start
  .custom-shape-divider-bottom-1703021672 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1703021672 svg {
    position: relative;
    display: block;
    width: calc(134% + 1.3px);
    height: 140px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1703021672 .shape-fill {
    fill: var(--bg-light);
  }
  // hero wave: end
}

.home-feature {
  width: 100%;
  background-color: var(--bg-light);
  &__content {
    max-width: 1200px;
    margin: 0 auto;
    height: fit-content;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__card {
    flex: 1;
    height: fit-content;
    background: var(--primary-light);
    padding: 1rem;
    border-radius: 0.75rem;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.4s;
    &:hover {
      box-shadow: 0px 6px 16px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.4s;
    }

    &__top {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 1rem;
      img {
        width: 50px;
        height: 50px;
        border-radius: 6px;
        padding: 5px;
        background-color: var(--primary-color);
      }
      h5 {
        font-size: 20px;
        font-weight: 700;
        line-height: 100%;
        color: var(--text-black);
        text-transform: capitalize;
      }
    }

    &__p {
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      color: var(--text-gray);
      margin-bottom: 0 !important;
    }
  }
}

.home-discover {
  width: 100%;
  background: var(--bg-gray);
  padding: 9rem 0;
  position: relative;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3.125rem;
  }

  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      max-width: 31.875rem;
    }
  }

  &__right {
    width: 60%;

    h2 {
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 140%;
      color: var(--primary-color);
      text-transform: capitalize;
      margin-bottom: 1.5rem;
    }
    p {
      width: 90%;
      text-align: justify;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 160%;
      color: var(--text-light);
      margin-bottom: 2.5rem;
    }

    button {
      width: 226px;
      height: 56px;
      padding: 10px 25px;
      outline: none;
      border-radius: 8px;
      border: 1px solid transparent;
      background: var(--primary-color);
      color: var(--white-color);
      text-transform: capitalize;
      font-size: 18px;
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
  }

  // curve top : start
  .wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .wave-top svg {
    position: relative;
    display: block;
    width: calc(137% + 1.3px);
    height: 160px;
  }

  .wave-top .shape-fill {
    fill: var(--bg-light);
  }
  // curve top : end
  // curve bottom: start
  .wave-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .wave-bottom svg {
    position: relative;
    display: block;
    width: calc(208% + 1.3px);
    height: 160px;
  }

  .wave-bottom .shape-fill {
    fill: var(--text-light);
  }
}

.home-popular-food {
  width: 100%;
  background: var(--text-light);
  padding: 6.25rem 0;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4.375rem;
  }

  &__top {
    text-align: center;
    h2 {
      color: var(--white-color);
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 130%;
      text-transform: capitalize;
      margin-bottom: 1.5rem;
      span {
        color: var(--text-gray);
      }
    }
    p {
      color: var(--text-gray);
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  &__middle {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));
    gap: 1.7rem;

    &__card {
      background: var(--bg-gray);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 17px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        width: 100%;
        height: 12.5rem;
        border-radius: 17px 17px 0px 0px;
        object-fit: cover;
      }

      &__info {
        padding: 1.25rem;
        h5 {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 100%;
          color: var(--primary-color);
          text-transform: capitalize;
          margin-bottom: 1.25rem;
        }
        p {
          color: var(--text-light);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 150%;
          margin-bottom: 1.25rem;
        }
        span {
          color: var(--primary-color);
          font-size: 1rem;
          font-weight: 700;
          line-height: 100%;
        }
      }
    }
  }

  &__bottom {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 0.625rem 1.25rem;
      background: var(--primary-color);
      color: var(--white-color);
      font-size: 1rem;
      font-weight: 700;
      line-height: 100%;
      outline: none;
      border: none;
      letter-spacing: 0.5px;
      text-transform: capitalize;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.home-inspiration {
  width: 100%;
  padding: 13rem 0;
  background-color: var(--bg-gray);
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20rem 1rem 4rem 1rem !important;
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 3.125rem;
    height: 22.5rem;
  }

  &__left {
    h2 {
      color: var(--primary-color);
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 140%;
      text-transform: capitalize;
      margin-bottom: 1.5rem;
      span {
        color: var(--white-color);
      }
    }
    p {
      width: 90%;
      color: var(--white-color);
      text-align: justify;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 160%;
      margin-bottom: 2.5rem;
    }

    button {
      width: 226px;
      height: 56px;
      padding: 10px 25px;
      outline: none;
      border-radius: 8px;
      border: 1px solid transparent;
      background: var(--primary-color);
      color: var(--white-color);
      text-transform: capitalize;
      font-size: 18px;
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
  }

  &__right {
    img {
      border-radius: 16px;
      object-fit: cover;
    }
  }

  // wave top:  start
  .inspiration-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .inspiration-wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 113px;
  }

  .inspiration-wave .shape-fill {
    fill: var(--text-light);
  }

  // wave top:  end
}

.home-delivery-area {
  padding: 9rem 0;
  width: 100%;
  position: relative;
  background-image: url("/images/restaurant-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.75rem;
  }

  &__top {
    text-align: center;
    h2 {
      color: var(--white-color);
      font-size: 2.75rem;
      font-weight: 700;
      line-height: 100%;
      text-transform: capitalize;
    }
  }

  &__bottom {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1.25rem;
    .active {
      background: var(--primary-color);
      span {
        color: var(--white-color);
      }
    }

    &__card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 0.875rem 1.875rem;
      background: var(--primary-light);
      cursor: pointer;
     .location-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
     }
    }
    span {
      font-size: 1rem;
      font-weight: 700;
      line-height: normal;
      color: var(--text-black);
      text-transform: uppercase;
    }
  }
}

// mobile and tablet devices
@media screen and (max-width: 768px) {
  .home-hero {
    width: 100%;
    padding: 0 1rem;
    background-color: rgb(249, 238, 238, 0.6);
    border-radius: inherit;
    video {
      display: block;
    }
    &__left {
      width: 100%;
      gap: 1.7rem;
      h1 {
        font-size: 2.2rem;
        line-height: 140%;
        font-weight: 700;
        color: var(--text-black);
        span {
          font-size: 2rem;
          line-height: 140%;
          color: var(--primary-color);
        }
      }
      p {
        font-size: 1rem;
        display: none;
      }
    }
    .background-clip {
      display: block;
    }

    &__details {
      width: 90%;
      &__location {
        &__select {
          font-size: 1rem;
          width: 100%;
          option {
            padding: 0.3rem;
          }
        }
      }

      &__delivery__type {
        &__btn {
          width: fit-content;
          padding: 1rem;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }
      }
    }

    &__right {
      display: none;
    }

    .custom-shape-divider-bottom-1703021672 {
      display: none;
    }
  }

  .home-feature {
    &__content {
      flex-direction: column;
      height: fit-content;
      padding: 0 1rem;
      margin: 4rem 0;
    }

    &__card {
      width: 100%;
    }
  }

  .home-discover {
    padding: 12rem 0;
    &__content {
      flex-direction: column;
      padding: 0 1rem;
      gap: 2rem;
    }
    &__left {
      width: 80%;
      position: relative;
      &__circle {
        width: 18.75rem;
        &__one {
          height: 12.5rem;
          width: 12.5rem;
        }
        &__two {
          height: 18.75rem;
          width: 18.75rem;
        }
      }
      &__img2 {
        display: none;
      }
      &__img3 {
        display: none;
      }
      &__img4 {
        display: none;
      }
      &__img5 {
        display: none;
      }
    }
    &__right {
      width: 100%;

      h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      p {
        width: 100%;
        text-align: justify;
        font-size: 1rem;
        line-height: 140%;
        margin-bottom: 2rem;
      }

      button {
        width: fit-content;
        padding: 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }

  }

  .home-popular-food {
    padding: 5rem 1rem;
    &__content {
      gap: 3.5rem;
    }
    &__top {
      h2 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1rem;
      }
    }

    &__middle {
      grid-template-columns: repeat(2, 1fr);
      &__card {
        &:hover {
          transform: scale(1.04);
        }
        img {
          height: 6.5rem;
        }

        &__info {
          padding: 1rem;
          h5 {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }

  .home-inspiration {
    width: 100%;
    padding: 12rem 1rem 4rem 1rem;
    &__content {
      flex-direction: column-reverse;
    }

    &__left {
      h2 {
        font-size: 1.8rem;
      }
      p {
        width: 100%;
        font-size: 1rem;
      }

      button {
        width: fit-content;
        padding: 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }

    &__right {
      width: 100%;
      img {
        width: 100%;
        height: 18rem;
      }
    }

    .inspiration-wave {
      display: none;
    }
  }

  .home-delivery-area {
    display: none;
  }
}

// laptop devices
@media (min-width: 768.099px) and (max-width: 1200px) {
  .home-hero {
    &__content {
      padding: 0 1rem;
    }
    &__left {
      flex: 1;
      gap: 1rem;
      h1 {
        font-size: 1.7rem;
        line-height: 140%;
        span {
          line-height: 120%;
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1rem;
        line-height: 120%;
      }
    }

    &__details {
      width: 90%;
      &__location {
        &__select {
          font-size: 1rem;
          width: 100%;
          option {
            padding: 0.3rem;
          }
        }
      }
      &__delivery__type {
        &__btn {
          padding: 1rem;
        }
      }
    }

    &__right {
      flex: 1;
      margin-top: 6rem;
      margin-left: 2rem;
      &__circle {
        width: 22rem;
        &__one {
          width: 22rem;
        }
        &__two {
          width: 22rem;
        }
        &__three {
          width: 22rem;
        }
      }

      &__img1 {
        width: 200px;
        top: -80px;
        left: 70px;
      }
      &__img2 {
        width: 210px;
        bottom: 60px;
        left: -65px;
      }
      &__img3 {
        width: 250px;
        top: 120px;
        left: 210px;
      }
    }
  }

  .home-feature {
    &__content {
      height: auto;
      padding: 0 1rem;
      margin: 4rem 0;
    }

    &__card {
      flex: 1;
    }
  }

  .home-discover {
    padding: 0 1rem;
    &__content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }

    &__left {
      width: 50%;
      &__circle {
        width: 25rem;
        &__one {
          height: 13rem;
        }
        &__two {
          height: 20.75rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      &__img2 {
        display: none;
      }
      &__img3 {
        right: 2.95rem;
        bottom: 8.5rem;
      }
      &__img4 {
        top: -0.5rem;
      }
      &__img5 {
        height: 7.0625rem;
        left: 2.4375rem;
      }
    }

    &__right {
      width: 50%;

      h2 {
        font-size: 2rem;
      }
      p {
        width: 100%;
        font-size: 1rem;
      }

      button {
        width: fit-content;
        padding: 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }
  }
  .home-popular-food {
    margin: 7.5rem 0;
    padding: 0 1rem;
    &__content {
      gap: 3.5rem;
    }
    &__top {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }

    &__middle {
      &__card {
        &:hover {
          transform: scale(1.05);
        }
        img {
          height: 11.5rem;
        }

        &__info {
          padding: 1rem;
          h5 {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  .home-inspiration {
    padding: 2rem 1rem 4rem;
    &__content {
      gap: 3rem;
    }

    &__left {
      width: 60%;
      h2 {
        color: var(--text-black);
        font-size: 2rem;
        font-weight: 700;
        line-height: 120%;
        text-transform: capitalize;
        margin-bottom: 1.5rem;
      }
      p {
        width: 100%;
        font-size: 1rem;
        margin-bottom: 2rem;
      }

      button {
        width: fit-content;
        padding: 1rem;
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }

    &__right {
      img {
        width: 100%;
        height: 19rem;
        border-radius: 16px;
      }
    }
  }
  .home-delivery-area {
    padding: 5rem 1rem;
    &__top {
      h2 {
        font-size: 2rem;
      }
    }
    &__bottom {
      &__card {
        padding: 0.75rem;
        span {
          font-size: 0.875rem;
          letter-spacing: 1px;
        }

        img {
          filter: hue-rotate(265deg) contrast(2) saturate(4);
        }
      }
    }
  }
}
</style>
