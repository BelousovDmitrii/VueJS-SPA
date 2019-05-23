
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #000;
  font-family: "Open Sans";
  background-color: #efeff4;
}

img {
  max-width: 100%;
  height: auto;
}

.btn {
  padding: 11px 14px;
  background: none;
  border: 0;
  width: 100%;
  &-green {
    background-color: #88c435;
    color: #fff;
    margin-right: 15px;
  }
}

.tarif-list {
  display: flex;
  flex-wrap: wrap;
}

.tarif-item {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &_detail {
    .tarif-item__content {
      &:after {
        display: none;
      }
    }
    .tarif-item__bottom {
      padding-right: 15px;
    }
    .tarif-item__title,
    .tarif-item__content {
      cursor: text;
    }
  }

  &__wrapper {
    flex-basis: 32%;
    margin-right: 2%;
    margin-bottom: 30px;
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 15px 0 15px 15px;

    &_detail {
      margin-right: 0;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  &__title {
    font-size: 18px;
    color: #88c435;
    font-weight: 800;
    padding-bottom: 15px;
    cursor: pointer;
    margin-bottom: 5px;
    border-bottom: 1px solid #e6e6e6;
  }

  &_id-0 {
    .tarif-item__speed {
      background-color: #70603e;
    }
  }

  &_id-1 {
    .tarif-item__speed {
      background-color: #0075d9;
    }
  }

  &_id-2 {
    .tarif-item__speed {
      background-color: #ea5e25;
    }
  }

  &_id-3 {
    .tarif-item__speed {
      background-color: #0075d9;
    }
  }

  &_id-4 {
    .tarif-item__speed {
      background-color: #ea5e25;
    }
  }

  &__link {
    a {
      text-decoration: none;
      color: #0075d9;
    }
  }

  &__speed {
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    margin: 8px 0 11px -14px;
    background-color: #000;
    padding: 8px 14px;
    display: inline-block;
  }

  &__time {
    color: #a29a9a;
    margin-top: 15px;
  }

  &__price {
    font-weight: 700;
    color: #383434;
    margin-bottom: 10px;
  }

  &__free-options {
    margin-bottom: 8px;
  }

  &__content {
    flex: 1;
    padding-bottom: 6px;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      right: 17px;
      width: 26px;
      height: 26px;
      top: 50%;
      transform: translateY(-50%);
      background: url("./assets/icons8-chevron-right-30.png") center center
        no-repeat;
      background-size: cover;
    }
  }

  &__bottom {
    padding-top: 10px;
  }
}

@media screen and (max-width: 1023px) {
  .tarif-item__wrapper {
    flex-basis: 48%;
    margin-right: 4%;

    &:nth-child(3n) {
      margin-right: 4%;
    }

    &:nth-child(2n) {
      margin-right: 0%;
    }
  }
}

@media screen and (max-width: 640px) {
  .tarif-item__wrapper {
    flex-basis: 100%;
    margin-right: 0%;

    &:nth-child(3n) {
      margin-right: 0%;
    }

    &:nth-child(2n) {
      margin-right: 0%;
    }
  }
}
</style>
