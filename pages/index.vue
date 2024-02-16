<template>
  <div>
    <!---------- Banner Section ----------->
    <section class="banner_section">
      <div class="banner_content">
        <h1>
          {{ $t("Meet, Eat & Enjoy The") }} <br />
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
            <div class="icon_arrow">
              <font-awesome-icon class="arrow_icon" class="fa-solid fa-chevron-down"></font-awesome-icon>
            </div>
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
          </div>
        </div>
      </div>
      <div class="banner_image">
        <img src="../assets/banner_image.png" alt="banner" />
      </div>
    </section>

    <!---------- Feature Section ----------->
    <section class="home-feature">
      <div class="home-feature__content">
        <div class="home-feature__card">
          <img src="/images/icon-supplier.png" alt="" />
          <div class="home-feature__card__top">
            <h3>{{ $t("ease of ordering") }}</h3>
            <p>{{ $t("Effortless meal selection and easy.") }}</p>
          </div>
        </div>
        <div class="home-feature__card">
          <img src="/images/icon-best-seller.png" alt="" />
          <div class="home-feature__card__top">
            <h3>{{ $t("best quality") }}</h3>
            <p>{{ $t("Finest ingredients, exceptional taste.") }}</p>
          </div>
        </div>
        <div class="home-feature__card">
          <img src="/images/icon-truck.png" alt="" />
          <div class="home-feature__card__top">
            <h3>{{ $t("quick delivery") }}</h3>
            <p>{{ $t("Speedy delivery for your cravings.") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!----------About Section ----------->
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
            {{$t("Contact")}} <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="about_secondimage">
          <img src="../assets/about00.png" alt="about" />
        </div>
      </div>
    </section>

    <!--Popular Section-->
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

    <!----------Contact Section ----------->
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
// animation for forward spinning
@keyframes spinForward {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
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
      .select {
        position: relative;
        width: 100%;
        select{
          border: none;
          outline: none;
          width: 100%;
          padding: 15px 30px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #dfdfdf;
          border: none;
          margin-top: 15px;
          cursor: inherit;
          border-radius: 8px;
          font-size: 18px;
          color: #333333;
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
  }

  &__card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
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
      align-items: start;
      margin-bottom: 1rem;
      flex-direction: column;
      justify-content: flex-start;
      margin-left:10px;
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
          back
        i {
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
      .contact_email {
        margin: 0px 20px;
        border-radius: 18px;
        background-color: #bebebe;
        padding: 25px 35px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 60px;
        }
        .contact_email_details {
          margin-left: 20px;
          h3 {
            font-size: 24px;
            font-weight: 600;
            color: #333333;
          }
          p {
            font-size: 18px;
            font-weight: 500;
            color: #333333;
          }
        }
      }
    }
  }
}

// mobile and tablet devices
@media screen and (max-width: 768px) {
  .home-hero {
    width: 100%;
    padding: 0 1rem;
    background-color: rgb(0, 0, 0, 0.6);
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
        color: #fff;

        text-shadow: 5px 5px 10px #000;

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
      width: 100%;
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
