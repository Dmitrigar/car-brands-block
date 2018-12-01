<template>
<div class="CarBrandsBlock">
  <div class="CarBrandsBlock__stripe"></div>
  <WhiteCircle class="CarBrandsBlock__WhiteCircle" />

  <div class="CarBrandsBlock__centring">
    <div class="CarBrandsBlock__content">
      <h2 class="CarBrandsBlock__title">Только проверенные автомобили</h2>
      <Logos class="CarBrandsBlock__logos" />

      <OrangeOval class="CarBrandsBlock__OrangeOval" />
      <BlueOval class="CarBrandsBlock__BlueOval" />
    </div>
  </div>
</div>
</template>

<style lang="scss">
@import "./vars.scss";

.CarBrandsBlock {
  position: relative;
  background: $mainBackground;
  height: $totalHeight;
  overflow: hidden;
  max-width: $blockMaxWidth;
}

.CarBrandsBlock__stripe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $headStripeHeight;
  background: linear-gradient(29.18deg, #01aeca 5.56%, #67c6a3 95.8%);
}

.CarBrandsBlock__centring {
  position: absolute;
  left: 50%;
  top: $headStripeHeight;
}

.CarBrandsBlock__content {
  position: relative;
  left: -50%;
  width: $contentWidth;
  padding-top: 100px;
  max-height: $contentHeight;
}

.CarBrandsBlock__title {
  margin: 0;
  height: 58px;
  text-align: center;
  font-family: Ubuntu Condensed;
  font-style: normal;
  font-weight: normal;
  line-height: 58px;
  font-size: 48px;
  letter-spacing: -0.617143px;
  color: $mainColor;
}

.CarBrandsBlock__logos {
  text-align: center;
  padding: 45px 0;
}

.CarBrandsBlock__WhiteCircle {
  position: relative;
  display: block;
  top: 252px;
  right: 21px;
  margin: auto;
}

.CarBrandsBlock__OrangeOval {
  position: absolute;
  top: 0;
  right: $contentWidth - 53px;
}

.CarBrandsBlock__BlueOval {
  position: absolute;
  top: 451 - $headStripeHeight;
  left: $contentWidth + 36px;
  text-align: right;
}
</style>

<script>
import Logos from "./Logos.vue";
import WhiteCircle from "./assets/WhiteCircle.vue";
import OrangeOval from "./assets/OrangeOval.vue";
import BlueOval from "./assets/BlueOval.vue";

export default {
  name: "CarBrandsBlock",
  components: {
    Logos,
    WhiteCircle,
    OrangeOval,
    BlueOval
  }
};
</script>
