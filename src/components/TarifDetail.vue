<template>
  <div class="tarif-detail">
    <TarifHeader :title="'Выбор тарифа'"></TarifHeader>
    <div class="tarif-item__wrapper tarif-item__wrapper_detail">
      <div class="tarif-item tarif-item_detail">
        <div class="tarif-item__title">Тариф "{{tarif_title}}"</div>
        <div class="tarif-item__content">
          <div class="tarif-item__price">
            Период оплаты - {{curTarif.pay_period}} {{ declOfNum(curTarif.pay_period, ["месяц", "месяца", "месяцев"])}}
            <br>
            {{curTarif.price / curTarif.pay_period}} Р/Мес
          </div>
          <div class="tarif-item__add-cost">
            Разовый платеж - {{curTarif.price}} Р
            <br>
            со счета спишется - {{curTarif.price}} Р
          </div>
          <div class="tarif-item__add-cost"></div>
          <div class="tarif-item__time">
            вступит в силу сегодня
            <br>
            активно до - {{getCurrentTime()}}
          </div>
        </div>
        <div class="tarif-item__bottom">
          <button class="btn btn-green">Выбрать</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
import TarifHeader from "./TarifHeader";
export default {
  data() {
    return {
      curTarif: null
    };
  },
  props: ["Did", "tarif_title"],
  mounted() {
    axios.post("../../api/tarifs.php").then(response => {
      this.curTarif =
        response.data.tarifs[this.$route.params.Tid].tarifs[
          this.$route.params.Did
        ];
    });
  },
  components: {
    TarifHeader: TarifHeader
  },
  methods: {
    declOfNum(number, titles) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    },
    getCurrentTime() {
      let timestamp = this.curTarif.new_payday.split("+")[0];
      let timezone = this.curTarif.new_payday.split("+")[1];
      let time = new Date(timestamp * 1000 + timezone * 60000);
      return (
        time.getDate() + "." + (time.getMonth() + 1) + "." + time.getFullYear()
      );
    }
  }
};
</script>

