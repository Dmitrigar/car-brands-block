<template>
<div class="CarBrandsBlock">
  <div class="CarBrandsBlock__stripe"></div>
  <WhiteCircle class="CarBrandsBlock__WhiteCircle" />

  <div class="CarBrandsBlock__centring">
    <div class="CarBrandsBlock__content">
      <h2 class="CarBrandsBlock__title">Только проверенные автомобили</h2>
      <Logos class="CarBrandsBlock__logos" />

      <div class="CarBrandsBlock__brands">
        <div class="CarBrandsBlock__brand">
          <span class="CarBrandsBlock__brand-name">Kia</span>
          <span class="CarBrandsBlock__brand-count">5</span>
        </div>

        <div class="CarBrandsBlock__brand">
          <span class="CarBrandsBlock__brand-name">Kia</span>
          <span class="CarBrandsBlock__brand-count">5</span>
        </div>

        <div class="CarBrandsBlock__brand">
          <span class="CarBrandsBlock__brand-name">Kia</span>
          <span class="CarBrandsBlock__brand-count">5</span>
        </div>

        <div class="CarBrandsBlock__brand">
          <span class="CarBrandsBlock__brand-name">Kia</span>
          <span class="CarBrandsBlock__brand-count">5</span>
        </div>

        <div class="CarBrandsBlock__brand">
          <span class="CarBrandsBlock__brand-name">Kia</span>
          <span class="CarBrandsBlock__brand-count">5</span>
        </div>
      </div>
    </div>
    
    <OrangeOval class="CarBrandsBlock__OrangeOval" />
    <BlueOval class="CarBrandsBlock__BlueOval" />
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
  font-family: Ubuntu;
  font-size: 16px;
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
  line-height: 58px;
  font-size: 48px;
  letter-spacing: -0.617143px;
  color: $mainColor;
}

.CarBrandsBlock__logos {
  text-align: center;
  padding: 45px 0;
}

.CarBrandsBlock__brands {
  margin-bottom: 80px;
}

.CarBrandsBlock__brand {
  float: left;
  width: $contentWidth / 5;
}

.CarBrandsBlock__brand-name {
  margin: 7px;
}
.CarBrandsBlock__brand-count {
  margin: 7px;
  font-weight: bold;
  font-size: 13px;
  mix-blend-mode: normal;
  opacity: 0.32;
}

.CarBrandsBlock__button {
  float: right;
  width: 224px;
  height: 56px;

  font-size: inherit;
  background: #2d3c4e;
  border: none;
  border-radius: 3px;
  color: #ffffff;
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
  right: 1320px;
}

.CarBrandsBlock__BlueOval {
  position: absolute;
  top: 451 - $headStripeHeight;
  left: 474px;
  text-align: right;
}
</style>

<script>
import Logos from "./Logos.vue";
import WhiteCircle from "./assets/WhiteCircle.vue";
import OrangeOval from "./assets/OrangeOval.vue";
import BlueOval from "./assets/BlueOval.vue";

import testData from "./test-data";

export default {
  name: "CarBrandsBlock",
  components: {
    Logos,
    WhiteCircle,
    OrangeOval,
    BlueOval
  },
  data() {
    return {
      brands: testData
    };
  }
};
</script>
