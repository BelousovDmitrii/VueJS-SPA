<template>
  <div class="tarif">
    <TarifHeader :title="'Тариф '+curTarif.title"></TarifHeader>
    <div class="tarif-list">
      <div class="tarif-item__wrapper" v-for="(tarif, index) in curTarif.tarifs" v-bind:key="index">
        <div class="tarif-item" @click="goToTarifDetail(tarif.ID, index)">
          <div class="tarif-item__title">{{tarif.pay_period}} месяц</div>
          <div class="tarif-item__content">
            <div class="tarif-item__price">{{tarif.price / tarif.pay_period}} Р/мес</div>
            <div class="taris-mounths-item__add-cost">Разовый платеж - {{tarif.price}} Р</div>
            <div
              class="tarifs-mounths-item__sale"
              v-if="index != 0"
            >Скидка - {{curTarif.tarifs[0].price * tarif.pay_period - tarif.price}} Р</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import TarifHeader from "./TarifHeader";
export default {
  methods: {
    goToTarifDetail(tarif_detail_path, tarif_detail_id) {
      this.$router.push({
        name: "TarifsMounthsDetail",
        params: {
          Did: tarif_detail_id,
          tarif_title: this.curTarif.title,
          Tid: this.$route.params.Tid,
          Mid: tarif_detail_path
        }
      });
    }
  },
  data() {
    return {
      tarif_id: this.$route.params.Tid,
      curTarif: null
    };
  },
  mounted() {
    axios.post("../../api/tarifs.php").then(response => {
      this.curTarif = response.data.tarifs[this.$route.params.Tid];
    });
  },
  components: {
    TarifHeader: TarifHeader
  }
};
</script>

