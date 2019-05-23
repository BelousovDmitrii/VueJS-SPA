<template>
  <div class="tarif">
    <div class="tarif-list">
      <div class="tarif-item__wrapper" v-for="(tarif, index) in tarifList" v-bind:key="index">
        <Tarif
          :title="tarif.title"
          :speed="tarif.speed"
          :price_first="tarif.tarifs[0].price"
          :price_last="tarif.tarifs[tarif.tarifs.length - 1].price"
          :free_options="tarif.free_options"
          :link="tarif.link"
          :id="index"
          :tarifs="tarif.tarifs"
        ></Tarif>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import Tarif from "./Tarif";

export default {
  data() {
    return {
      tarifList: {}
    };
  },
  mounted() {
    axios.post("../../api/tarifs.php").then(response => {
      this.tarifList = response.data.tarifs;
    });
  },
  components: {
    Tarif: Tarif
  }
};
</script>





