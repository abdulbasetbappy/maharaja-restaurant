<template>
  <div>
    <!----------Banner Section----------->
    <section class="banner_section">
      <div class="banner_content">
        <h1>
          {{ $t("Meet, Eat & Enjoy The") }}
          <span>{{ $t("True Taste") }}</span
          >.
        </h1>
        <p>
          {{ $t("Discover India's Rich Culinary Tapestry Right Here") }}
        </p>
        <div class="banner_btn">
          <div class="buttons">
            <button
              :class="{ active: !cart.is_pickup }"
              @click="cart._is_pickup = false"
            >
              {{ $t("Delivery") }}
            </button>
            <span>ou</span>
            <button
              :class="{ active: cart.is_pickup }"
              @click="cart._is_pickup = true"
            >
              {{ $t("Pickup") }}
            </button>
          </div>

          <div class="select" v-if="cart.is_pickup">
            <select
              id="standard-select"
              ref="location"
              name="location"
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
            <font-awesome-icon
              class="arrow_icon"
              :icon="['fas', 'angle-down']"
            />
          </div>

          <div class="select" v-else>
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
            <font-awesome-icon
              class="arrow_icon"
              :icon="['fas', 'angle-down']"
            />
          </div>
        </div>
      </div>
      <div class="banner_image">
        <img src="../assets/banner_image.png" alt="banner" />
      </div>
    </section>

    <!----------Feature Section----------->
    <section class="home-feature">
      <div class="home-feature__content">
        <div class="home-feature__content__card1">
          <img src="/images/icon-supplier.png" alt="" />
          <div class="home-feature__content__card1__top">
            <h3>{{ $t("ease of ordering") }}</h3>
            <p>{{ $t("Effortless meal selection and easy.") }}</p>
          </div>
        </div>
        <div class="home-feature__content__card2">
          <img src="/images/icon-best-seller.png" alt="" />
          <div class="home-feature__content__card2__top">
            <h3>{{ $t("best quality") }}</h3>
            <p>{{ $t("Finest ingredients, exceptional taste.") }}</p>
          </div>
        </div>
        <div class="home-feature__content__card3">
          <img src="/images/icon-truck.png" alt="" />
          <div class="home-feature__content__card3__top">
            <h3>{{ $t("quick delivery") }}</h3>
            <p>{{ $t("Speedy delivery for your cravings.") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!----------About Section----------->
    <section class="about_section">
      <div class="about_content">
        <div class="about_firstimage">
          <img src="../assets/about01.png" alt="about" />
        </div>
        <div class="about_text">
          <p class="p_subtitle">About Us</p>
          <h2>
            Discover Our<br />
            Restaurant Story
          </h2>
          <p class="p_paragraph">
            Uber Eats is an American online food ordering and delivery platform
            launched by Uber in 2014 and based in San Francisco, California.
            Users can read menus, reviews and ratings, order and pay for food
            from participating restaurants using an application on the iOS or
            Android platforms, or through a web browser. Users can order from
            any participating restaurant within their operating radius.
          </p>
          <button>
            {{ $t("Contact") }}
            <font-awesome-icon
              class="icons"
              icon="fa-solid fa-arrow-right"
            ></font-awesome-icon>
          </button>
        </div>
        <div class="about_secondimage">
          <img src="../assets/about00.png" alt="about" />
        </div>
      </div>
    </section>

    <!---------Popular Section----------->
    <section class="home-popular-food">
      <div class="home-popular-food__content">
        <div class="home-popular-food__content__top">
          <h2>
            <span>{{ $t("Crowd Favorites:") }}</span
            ><br />
            {{ $t("Savory Treasures From Our Kitchen") }}
          </h2>
          <p>
            {{ $t("Indulge in the Most-Loved Creations Loved by Our Patrons") }}
          </p>
        </div>
        <div class="home-popular-food__content__middle">
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
        <div class="home-popular-food__content__bottom">
          <button>
            {{ $t("View All Item") }}
            <font-awesome-icon
              class="icons"
              icon="fa-solid fa-arrow-right"
            ></font-awesome-icon>
          </button>
        </div>
      </div>
    </section>

    <!----------Contact Section----------->
    <section class="Contact_container">
      <div class="contact_section">
        <div class="contact_title">
          <p>Contact Us</p>
          <h2>Get In Touch</h2>
        </div>
        <div class="contact_details">
          <div class="contact_form">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id=""
            />
            <input
              type="emial"
              name="email"
              placeholder="Enter Your Email"
              id=""
            />
            <textarea
              name="details"
              placeholder="Message..."
              id=""
              cols="30"
              rows="7"
            ></textarea>
            <button>Submit</button>
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.27308423812!2d90.38425380000001!3d23.72710665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1705408275387!5m2!1sen!2sbd"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="contact_text">
          <div class="contact_email">
            <div class="logo">
              <img src="../assets/gmail02.png" alt="" />
            </div>
            <div class="contact_email_details">
              <h3>Email</h3>
              <p>example@gmail.com</p>
              <p>supose@hotmail.com</p>
            </div>
          </div>
          <div class="contact_email">
            <div class="logo">
              <img src="../assets/phone01.png" alt="" />
            </div>
            <div class="contact_email_details">
              <h3>Phone</h3>
              <p>+88014 2458 6589</p>
              <p>+88018 2547 2658</p>
            </div>
          </div>
          <div class="contact_email">
            <div class="logo">
              <img src="../assets/location00.png" alt="" />
            </div>
            <div class="contact_email_details">
              <h3>Location</h3>
              <p>123 Islamic Street,</p>
              <p>Dhaka, Bangladesh</p>
            </div>
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
  title: "Home - Le Maharaja",
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

const popularCategories = computed(() => {
  let categories = menus?.categories;

  if (categories) {
    return categories.sort((a: any, b: any) => b.score - a.score);
  } else {
    return [];
  }
});
</script>

<style lang="scss" scoped>
/*--------Banner Section-----------*/
.banner_section {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 50px 20px;
  .banner_content {
    width: 45%;
    h1 {
      font-size: 46px;
      font-weight: 600;
      line-height: 1.2;
      span {
        color: var(--primary-color);
      }
    }
    p {
      font-size: 20px;
      color: #333333;
      font-weight: 500;
      margin: 20px 0px;
    }
    .banner_btn {
      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          padding: 15px 30px;
          font-size: 20px;
          border-radius: 8px;
          border: none;
          font-weight: bold;
          color: #333333;
          width: 45%;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
            color: #fff;
          }
          &.active {
            background-color: var(--primary-color);
            color: #fff;
          }
        }
        span {
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
      }
      .select{
        position: relative;
        width: 100%;
        select {
          border: none;
          outline: none;
          width: 100%;
          padding: 12px 20px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #dfdfdf;
          border: none;
          margin-top: 15px;
          cursor: inherit;
          border-radius: 8px;
          font-size: 16px;
          color: #333333;
        }
        .arrow_icon {
          position: absolute;
          top: 50%;
          right: 12px;
        }
      }
    }
  }
  .banner_image {
    width: 45%;
    img {
      width: 95%;
      animation: spinForward 100s linear infinite;
    }
  }
}

/*--------Feature Section-----------*/
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
    &__card1,
    &__card2,
    &__card3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
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
      img {
        width: 70px;
        height: 70px;
        border-radius: 6px;
        padding: 5px;
        background-color: var(--primary-color);
      }
      &__top {
        display: flex;
        align-items: flex-start;
        margin-left: 10px;
        flex-direction: column;
        justify-content: flex-start;
        h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--text-black);
          text-align: left;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 100%;
          color: var(--text-gray);
        }
      }
    }
  }
}

/*--------About Section-----------*/
.about_section {
  max-width: 100%;
  margin: auto;
  padding: 100px 0px;
  max-height: 700px;
  background-color: var(--bg-light);
  .about_content {
    display: flex;
    position: relative;
    .about_firstimage {
      border: none;
      width: 35%;
      overflow: hidden;
      img {
        width: 80%;
      }
    }
    .about_secondimage {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 25%;
      img {
        width: 100%;
      }
    }
    .about_text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 50px;
      max-width: 676px;
      h2 {
        font-size: 50px;
        line-height: 130%;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .p_subtitle {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-color);
      }
      .p_paragraph {
        font-size: 18px;
        font-weight: 500;
        line-height: 160%;
        color: #333333;
        margin: 20px 0px;
      }
      button {
        padding: 15px 30px;
        font-size: 20px;
        border-radius: 8px;
        border: none;
        font-weight: bold;
        width: auto;
        position: relative;
        back i {
          width: fit-content;
          position: absolute;
          top: 0;
          right: -30px;
          margin-left: 10px;
          background-color: #ffaa4d;
          padding: 15px;
          border-radius: 8px;
        }
      }
    }
  }
  .about_image {
  }
}

/*--------Popular Section-----------*/
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

/*--------Contact Section-----------*/
.Contact_container {
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  padding: 0px;
  margin: 0px;
  .contact_section {
    max-width: 1320px;
    margin: auto;
    padding: 100px 0px;
    .contact_title {
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      p {
        font-size: 20px;
        font-weight: 500;
        color: #333333;
        margin: 10px 0px;
      }
    }
    .contact_details {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin: 50px 0px;
      .contact_form {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        background-color: #c5c5c5;
        padding: 30px 0px;
        border-radius: 18px;
        width: 35%;
        margin-right: 30px;
        input {
          width: 85%;
          margin-top: 10px;
          padding: 15px 20px;
          color: #333333;
          font-size: 16px;
          border: none;
          outline: none;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          &:focus {
            border-color: darken(#ccc, 10%);
          }
        }
        textarea {
          width: 85%;
          margin-top: 10px;
          padding: 15px 20px;
          color: #333333;
          border: none;
          outline: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          &:focus {
            border-color: darken(#ccc, 10%);
          }
        }
        button {
          width: 85%;
          margin-top: 10px;
        }
      }
      .map {
        margin-left: 30px;
        width: 35%;
        iframe {
          border-radius: 18px;
          width: 100%;
          max-height: 675px;
        }
      }
    }
    .contact_text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap:15px;
      .contact_email {
        padding: 10px;
        border-radius: 18px;
        background-color: #bebebe;
        display: flex;
        max-width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 60px;
        }
        .contact_email_details {
          margin-left: 0px;
          h3 {
            font-size: 24px;
            font-weight: 600;
            color: #333333;
          }
          p {
            font-size: 18px;
            font-weight: 500;
            color: #333333;
            line-height: 20px;
          }
        }
      }
    }
  }
}
// animation for forward spinning
@keyframes spinForward {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
//Responsive Breakpoint Mixins
@mixin respond-to($min-width, $max-width: null) {
  @if $max-width {
    @media screen and (min-width: $min-width) and (max-width: $max-width) {
      @content;
    }
  } @else {
    @media screen and (min-width: $min-width) {
      @content;
    }
  }
}
//Rest All Defaults in Browser
@mixin browser-reset {
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    overflow-x: hidden;
  }
}
//Responsive On Mobile
@include respond-to(0px, 768px) {
  @include browser-reset;
  div {
    max-width: 100%;
    margin: auto;
    /*--------Banner Section-----------*/
    .banner_section {
      max-width: auto;
      margin: auto;
      height: auto;
      padding-bottom: 40px;
      margin-top: 120px;
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      .banner_content {
        width: 768px;
        padding: 10px;
        h1 {
          font-size: 36px;
          font-weight: 600;
          padding: 0px 20px 0px 0px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
        }
        .banner_btn {
          max-width: 100%;
          margin-top: 20px;
          .buttons {
            button {
              padding: 8px 12px;
              font-size: 14px;
            }
            span {
              font-size: 14px;
            }
          }
        }
        .select {
          select {
            padding: 8px 12px;
            font-size: 14px;
            option {
              font-size: 14px;
            }
          }
          .icon_arrow {
            font-size: 14px;
          }
        }
      }
      .banner_image {
        width: 95%;
        margin: auto;
        margin-bottom: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    /*--------Feature Section-----------*/
    .home-feature {
      &__content {
        padding: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        &__card1 {
          max-width: 80%;
          opacity: 0.5;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        &__card2 {
          max-width: 90%;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        &__card3 {
          max-width: 80%;
          opacity: 0.5;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    /*--------Popular Section-----------*/
    .home-popular-food {
      padding: 2.25rem 0;
      &__content {
        padding: 20px 10px;
        &__top {
          padding: 10px;
          h2 {
            font-size: 28px;
          }
          p {
            font-size: 14px;
          }
        }
        &__middle {
          &__card {
            background-color: #333333;
            max-width: 80%;
            border: none;
            border-radius: 18px;
            margin-bottom: 20px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 18px;
            }
            &__info {
              color: #ffffff;
              padding: 0.8em;
              h5 {
                color: #ffffff;
                font-size: 18px;
              }
              p {
                color: #ffffff;
                font-size: 14px;
                line-height: 15px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
        &__bottom {
          button {
            position: relative;
            padding: 10px 20px;
            font-size: 14px;
            border: none;
            border-radius: 8px;
            .icons {
              position: absolute;
              top: 0;
              right: -30px;
              color: #ffffff;
              background-color: var(--primary-color);
              padding: 17px;
              border-radius: 8px;
            }
          }
        }
      }
    }
    /*--------About Section-----------*/
    .about_section {
      max-width: 100%;
      margin: auto;
      height: auto;
      padding: 50px 0px;
      .about_firstimage {
        display: none;
      }
      .about_content {
        width: 100%;
        padding: 20px;
        .about_text {
          max-width: 500px;
          padding-left: 0px;
          h2 {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .p_subtitle {
            font-size: 14px;
            font-weight: 500;
            margin: 0px 0px;
          }
          .p_paragraph {
            font-size: 14px;
            font-weight: 500;
            margin: 10px 0px;
          }
          button {
            padding: 10px 20px;
            font-size: 14px;
            position: relative;
            background-color: #fd9c35b4;
            color: #333333;
            .icons {
              background-color: #fc9e3a;
              position: absolute;
              top: 0;
              right: -35px;
              padding: 17px;
              border-radius: 8px;
            }
          }
        }
      }
      .about_secondimage {
        width: 60% !important;
      }
    }
    /*--------Contact Section-----------*/
    .Contact_container {
      .contact_section {
        padding: 50px 0px;
        .contact_title {
          h2 {
            font-size: 30px;
          }
          p {
            color: var(--primary-color);
            font-size: 14px;
          }
        }
        .contact_details {
          flex-direction: column;
          .contact_form {
            width: 85%;
            margin: auto;
            margin-bottom: 50px;
            input {
              width: 90%;
              padding: 10px;
            }
            textarea {
              width: 90%;
              padding: 10px;
            }
            button {
              width: 90%;
              padding: 10px 20px;
              border-radius: 8px;
              border: none;
              background-color: var(--primary-color);
              color: #fff;
            }
          }
          .map {
            width: 85%;
            margin: auto;
          }
        }
        .contact_text {
          width: 100%;
          margin: auto;
          flex-direction: column;
          .contact_email {
            margin: 10px 0px;
            width: 60%;
            padding: 10px 10px;
            .logo {
              img {
                width: 50px;
                height: 50px;
              }
            }
            .contact_email_details {
              h3 {
                font-size: 18px;
                font-weight: 600;
                padding: 0px;
                margin: 0px;
              }
              p {
                padding: 0px;
                margin: 0px;
                font-size: 14px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
}

//Responsive On Tablet
@include respond-to(769px, 1024px) {
  @include browser-reset;
  div {
    max-width: 100%;
    margin: auto;
    /*--------Banner Section-----------*/
    .banner_section {
      max-width: auto;
      margin: auto;
      height: auto;
      padding-bottom: 40px;
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      .banner_content {
        width: 1024px;
        padding: 10px;
        h1 {
          font-size: 40px;
          font-weight: 600;
          padding: 0px auto 0px 0px;
        }
        p {
          font-size: 16px;
          font-weight: 400;
        }
        .banner_btn {
          margin-left: 0px;
          max-width: 60%;
          margin-top: 20px;
          .buttons {
            button {
              padding: 10px 15px;
              font-size: 16px;
            }
            span {
              font-size: 16px;
            }
          }
        }
        .select {
          select {
            padding: 10px 15px;
            font-size: 16px;
            option {
              font-size: 16px;
            }
          }
          .icon_arrow {
            font-size: 16px;
          }
        }
      }
      .banner_image {
        width: 55%;
        margin: auto;
        margin-bottom: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    /*--------Feature Section-----------*/
    .home-feature {
      &__content {
        padding: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        &__card1 {
          max-width: 80%;
          opacity: 0.5;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        &__card2 {
          max-width: 90%;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        &__card3 {
          max-width: 80%;
          opacity: 0.5;
          img {
            width: 50px;
            height: 50px;
          }
          &__top {
            margin-top: 0px;
            h3 {
              font-size: 18px;
            }
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    /*--------Popular Section-----------*/
    .home-popular-food {
      padding: 2.25rem 0;
      &__content {
        padding: 20px 10px;
        &__top {
          padding: 10px;
          h2 {
            font-size: 28px;
          }
          p {
            font-size: 14px;
          }
        }
        &__middle {
          &__card {
            background-color: #333333;
            max-width: 80%;
            border: none;
            border-radius: 18px;
            margin-bottom: 20px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 18px;
            }
            &__info {
              color: #ffffff;
              padding: 0.8em;
              h5 {
                color: #ffffff;
                font-size: 18px;
              }
              p {
                color: #ffffff;
                font-size: 14px;
                line-height: 15px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
        &__bottom {
          button {
            position: relative;
            padding: 10px 20px;
            font-size: 14px;
            border: none;
            border-radius: 8px;
            .icons {
              position: absolute;
              top: 0;
              right: -30px;
              color: #ffffff;
              background-color: var(--primary-color);
              padding: 17px;
              border-radius: 8px;
            }
          }
        }
      }
    }
    /*--------About Section-----------*/
    .about_section {
      max-width: 100%;
      margin: auto;
      height: auto;
      padding: 50px 0px;
      .about_firstimage {
        display: none;
      }
      .about_content {
        width: 100%;
        padding: 20px;
        .about_text {
          max-width: 500px;
          padding-left: 0px;
          h2 {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .p_subtitle {
            font-size: 14px;
            font-weight: 500;
            margin: 0px 0px;
          }
          .p_paragraph {
            font-size: 14px;
            font-weight: 500;
            margin: 10px 0px;
          }
          button {
            padding: 10px 20px;
            font-size: 14px;
            position: relative;
            background-color: #fd9c35b4;
            color: #333333;
            .icons {
              background-color: #fc9e3a;
              position: absolute;
              top: 0;
              right: -35px;
              padding: 17px;
              border-radius: 8px;
            }
          }
        }
      }
      .about_secondimage {
        width: 60% ;
      }
    }
    /*--------Contact Section-----------*/
    .Contact_container {
      .contact_section {
        padding: 50px 0px;
        .contact_title {
          h2 {
            font-size: 30px;
          }
          p {
            color: var(--primary-color);
            font-size: 14px;
          }
        }
        .contact_details {
          flex-direction: row;
          .contact_form {
            width: 45%;
            margin: auto;
            margin-bottom: 0px;
            input {
              width: 90%;
              padding: 10px;
            }
            textarea {
              width: 90%;
              padding: 10px;
            }
            button {
              width: 90%;
              padding: 10px 20px;
              border-radius: 8px;
              border: none;
              background-color: var(--primary-color);
              color: #fff;
            }
          }
          .map {
            width: 45%;
            margin: auto;
          }
        }
        .contact_text {
          width: 100%;
          margin: auto;
          flex-direction: row;
          gap:10px;
          .contact_email {
            margin: 10px 0px;
            width: 30%;
            padding: 10px 10px;
            .logo {
              img {
                width: 50px;
                height: 50px;
              }
            }
            .contact_email_details {
              h3 {
                font-size: 18px;
                font-weight: 600;
                padding: 0px;
                margin: 0px;
              }
              p {
                padding: 0px;
                margin: 0px;
                font-size: 14px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
}

//Responsive On Desktop
@include respond-to(1025px, 1440px) {
  @include browser-reset;
}

//Responsive On Large Desktop
@include respond-to(1441px) {
  @include browser-reset;
  /*--------About Section-----------*/
  .about_section {
    .about_content {
      .about_firstimage {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .about_secondimage {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
