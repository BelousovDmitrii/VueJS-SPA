<template>
  <div class="tarif-header">
    <div class="back" @click="back()">
      <img src="./../assets/icons8-less-than-filled-50.png" alt>
    </div>
    <div class="tarif-header__value">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
.back {
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
}
.tarif-header {
  border-bottom: 1px solid #aba9a9;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #f5f5f5;

  &__value {
    text-align: center;
    padding: 10px 0;
    font-weight: 700;
    flex: 1;
  }
}
</style>


