<template>
  <section class="home-footer">
    <div class="home-footer__content">
      <div class="home-footer__left">
        <img
          class="home-footer__left__img"
          src="/images/le_maharaja.png"
          alt=""
        />
        <p>
          {{
            $t(
              "At Le Maharaja, we invite you on a culinary expedition where every dish narrates a tale of tradition and innovation. Our dedication to authenticity and excellence transpires in each bite, transporting you to the vibrant streets and kitchens of India. With a curated menu boasting a myriad of flavors, from the fragrant spices of tandoori entrees to the succulent seafood delights, immerse yourself in the rich tapestry of Indian cuisine."
            )
          }}
        </p>
        <div class="home-footer__left__social__icons" v-if="false">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/twitter.png" alt="" />
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/instagram.png" alt="" />
        </div>
      </div>
      <div class="home-footer__right">
        <div class="home-footer__right__content">
          <div class="home-footer__right__info">
            <h5>{{ $t("Quick Links") }}</h5>
            <ul>
              <li>
                <NuxtLink to="/" active-class="active" exact>{{
                  $t("Home")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/order" active-class="active">{{
                  $t("Menu")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" active-class="active">{{
                  $t("Contact")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy-policy" active-class="active">{{
                  $t("Privacy Policy")
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="home-footer__right__info">
            <h5>{{ $t("Hours") }}</h5>
            <ul>
              <li>Lundi au Dimanche 11:00-23:00</li>
            </ul>
          </div>
          <div class="home-footer__right__info">
            <h5>{{ $t("Address") }}</h5>
            <ul>
              <li>
                27 Avenue Reille, <br />
                75014 Paris
              </li>
              <li><a href="tel:09 50 93 81 48"> +33 09 50 93 81 48 </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="home-footer__bottom__area">
      {{ $t("Copyright") }} © {{ new Date().getFullYear() }} Le Maharaja.{{
        $t("All rights reserved")
      }}
      | {{ $t("Developed with ❤️ by ") }}
      <NuxtLink
        style="margin-left: 5px"
        target="_blank"
        to="https://www.wetechpro.com"
        >WeTechPro</NuxtLink
      >
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.home-footer {
  width: 100%;
  background: var(--primary-light);

  &__content {
    width: 1200px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    padding-top: 2.5rem;
    max-width: 100vw;
  }

  &__left {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    p {
      width: 90%;
      text-align: justify;
    }

    &__img {
      width: 124px;
      height: 126px;
    }

    &__social__icons {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;

      img {
        background: transparent;
      }
    }
  }

  &__right {
    width: 65%;
    &__content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      margin-top: 9.5rem;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2.5rem;
        margin-top: 0;
      }
    }

    &__info {
      h5 {
        font-size: 22px;
        color: #000;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 34px;
        text-transform: capitalize;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        li {
          cursor: pointer;
          a {
            text-decoration: none;
            cursor: pointer;
            color: var(--primary-color);

            &:hover {
              color: var(--text-gray);
            }
          }
        }
      }
    }
  }

  &__bottom__area {
    height: 36px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media all and (max-width: 768px) {
  .home-footer {
    &__content {
      justify-content: flex-start;
      padding: 4rem 1rem 1.5rem;
      height: fit-content;
      flex-direction: column;
    }

    &__left {
      flex-direction: column;
      gap: 24px;

      p {
        width: 92vw;
      }

      &__img {
        width: 124px;
        height: 126px;
      }
    }

    &__right {
      width: 100%;
      margin-top: 2.5rem;
      &__content {
        flex-direction: column;
        gap: 1.25rem;
      }

      &__info {
        h5 {
          font-size: 1.25rem;
          color: var(--text-black);
          margin-bottom: 1rem;
        }
        ul {
          gap: 0.4rem;
        }
      }
    }

    &__bottom__area {
      padding: 1rem 1rem;
      font-size: 0.6rem;
      letter-spacing: 1px;
      height: inherit;
    }
  }
}

@media screen and (min-width: 768.099px) and (max-width: 1200px) {
  .home-footer {
    &__content {
      padding: 4rem 1rem 1rem;
      flex-direction: column;
      height: fit-content;
      gap: 2.5rem;
    }

    &__left {
      gap: 1.25rem;
      &__img {
        width: 120px;
      }
    }
  }
}
</style>
