<template>
  <!---------- Footer Section ----------->
  <div class="footer_section">
    <div class="footer_section1">
      <div class="logo">
        <img src="../public/images/le_maharaja.png" alt="Logo" />
      </div>
      <p>
        Là où la tradition rencontre l'innovation. Découvrez la fusion des
        saveurs authentiques et de l'élégance moderne dans la cuisine indienne
        au Palais de Raja Maharaja
      </p>
      <div class="icon_div">
        <font-awesome-icon
          class="s_icons"
          icon="fa-brands fa-facebook"
        ></font-awesome-icon>
        <font-awesome-icon
          class="s_icons"
          icon="fa-brands fa-linkedin-in"
        ></font-awesome-icon>
        <font-awesome-icon
          class="s_icons"
          icon="fa-brands fa-instagram"
        ></font-awesome-icon>
      </div>
    </div>
    <div class="footer_section2">
      <h3 class="Section2_title">Location</h3>
      <p>Le Maharaja 21 Rue d'Ouessant 75015 Paris</p>
    </div>
    <div class="footer_section3">
      <h3 class="Section3_title">Subscribe</h3>
      <input type="email" placeholder="Enter Your Email" />
      <font-awesome-icon
        class="icons"
        icon="fa-solid fa-arrow-right"
      ></font-awesome-icon>
    </div>
    <div class="footer_section4">
      <h3 class="Section4_title">Application</h3>
      <div class="app">
        <img src="../assets/google.png" alt="Google-Playstore" />
        <img src="../assets/apple.png" alt="Apple-Store" />
      </div>
    </div>
  </div>
  <!-- Credit -->
  <hr />
  <h1 class="credit">
    Developed by <NuxtLink to="www.wetechpro.com">wetechpro</NuxtLink>
  </h1>
</template>

<script lang="ts">
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
/*--------Footer Section-----------*/
.footer_section {
  margin: auto;
  height: 300px;
  max-width: 1320px;
  background-color: #eef2f6;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 30px 20px 15px 20px;

  .footer_section1 {
    width: 40%;
    margin: 0px 50px;
    .logo {
      img {
        height: 60px;
        display: block;
      }
    }
    p{
      font-size: 16px;
      width: 110%;
      line-height: 1.4;
    }
    .icon_div {
      margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .s_icons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin: 5px;
        border-radius: 20px;
        width: 15px;
        height: 15px;
        color: #fdfdfd;
        background-color: #ff8800;
      }
    }
  }
  .footer_section2 {
    width: 20%;
    margin: 25px 20px;
    .Section2_title {
      font-size: 28px;
      font-weight: 600;
      color: #333333;
    }
    p{
      font-size: 16px;
      line-height: 1.4;
    }
  }
  .footer_section3 {
    width: 20%;
    margin: 25px 50px;
    position: relative;
    .Section3_title {
      font-size: 28px;
      font-weight: 600;
      color: #333333;
    }
    input {
      width: 100%;
      margin-top: 10px;
      padding: 15px 20px;
      color: #333333;
      font-size: 16px;
      border: none;
      outline: none;
      border-radius: 8px;
      font-size: 12px; ;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      &:focus {
        border-color: darken(#ccc, 10%);
      }
    }
    .icons {
      color: #fff;
      position: absolute;
      right: -32px;
      top: 43px;
      padding: 17px;
      background-color: #ffaa4d;
      border-radius: 8px;
      font-size: 24px;
    }
  }
  .footer_section4 {
    width: 20%;
    margin: 25px 50px;
    .Section4_title {
      font-size: 28px;
      font-weight: 600;
      color: #333333;
      margin-bottom: 10px;
    }
    .app {
      margin-bottom: 20px;
      img {
        width: 80%;
        display: block;
        margin: 10px 0px;
      }
    }
  }
}
.credit {
  text-align: center;
  padding: 8px 0px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
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
//Responsive On Mobile
@include respond-to(0px, 400px) {
  /*--------Footer Section-----------*/
  .footer_section {
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 400px;
    justify-content: start;
    padding: 30px 20px 15px 20px;
    .footer_section1 {
      width: 50%;
      margin: 0px 0px;
      .logo {
        h1 {
          font-size: 28px;
        }
      }
      p {
        font-size: 16px;
        width: 180%;
      }
      .icon_div {
        margin-top: 8px;
        margin-bottom: 20px;
        i {
          font-size: 16px;
          padding: 6px;
        }
      }
    }
    .footer_section2 {
      width: 50%;
      margin: 0px;
      .Section2_title {
        font-size: 24px;
      }
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .footer_section3 {
      width: 50%;
      margin: 0px;
      margin-bottom: 20px;
      .Section2_title {
        font-size: 24px;
      }
      input {
        width: 180px;
      }
      .icon {
        left: 164px;
        top: 45px;
      }
    }
    .footer_section4 {
      width: 50%;
      margin: 0px;
      .Section2_title {
        font-size: 21px;
      }
      .app {
        width: 60%;
        margin-top: 10px;
        display: flex;
        justify-content: start;
        img {
          width: 125px;
          margin-right: 10px;
        }
      }
    }
  }
}
//Responsive On Mobile
@include respond-to(400px, 768px) {
  /*--------Footer Section-----------*/
  .footer_section {
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 768px;
    justify-content: start;
    padding: 30px 20px;
    .footer_section1 {
      width: 50%;
      margin: 0px 0px;
      .logo {
        h1 {
          font-size: 28px;
        }
      }
      p {
        font-size: 16px;
        width: 180%;
      }
      .icon_div {
        margin-top: 8px;
        margin-bottom: 20px;
        i {
          font-size: 16px;
          padding: 6px;
        }
      }
    }
    .footer_section2 {
      width: 50%;
      margin: 0px;
      .Section2_title {
        font-size: 24px;
      }
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .footer_section3 {
      width: 50%;
      margin: 0px;
      margin-bottom: 20px;
      .Section2_title {
        font-size: 24px;
      }
      input {
        width: 180px;
      }
      i {
        left: 164px;
        top: 42px;
      }
    }
    .footer_section4 {
      width: 50%;
      margin: 0px;
      .Section2_title {
        font-size: 21px;
      }
      .app {
        width: 60%;
        margin-top: 10px;
        display: flex;
        justify-content: start;
        img {
          width: 125px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
