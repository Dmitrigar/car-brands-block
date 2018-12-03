<template>
<div class="CarBrandsBlock">
  <div class="CarBrandsBlock__stripe"></div>

  <div class="CarBrandsBlock__centring">
    <div class="CarBrandsBlock__content">
      <h2 class="CarBrandsBlock__title">Только проверенные автомобили</h2>
      <Logos class="CarBrandsBlock__logos" />

      <div v-if="Array.isArray(brands)" class="CarBrandsBlock__brands">
        <div class="CarBrandsBlock__brand" v-for="(x,i) in brands" :key="i">
          <span class="CarBrandsBlock__brand-name">{{x.brand}}</span>
          <span class="CarBrandsBlock__brand-count">{{x.car_count}}</span>
        </div>
      </div>

      <div v-else class="CarBrandsBlock__brands-error">
        <h4>ОШИБКА ЗАГРУЗКИ ДАННЫХ:</h4>
        <span>{{brands}}</span>
      </div>

      <div class="CarBrandsBlock__price">

        <VueSlider v-model="priceRange" :max="priceLimit" tooltip-dir="bottom" :bg-style="priceBgStyle" :process-style="priceProcessStyle">

          <template slot="tooltip" scope="tooltip">

            <div class="CarBrandsBlock__price-tooltip" v-html="formatPriceValue(tooltip.value)">
            </div>

          </template>
        </VueSlider>
      </div>

      <button class="CarBrandsBlock__button">Перейти в каталог</button>
    </div>

    <OrangeOval class="CarBrandsBlock__OrangeOval" />
    <BlueOval class="CarBrandsBlock__BlueOval" />
  </div>
</div>
</template>

<script>
import axios from "axios";
import VueSlider from "vue-slider-component";
import Logos from "./Logos.vue";
import OrangeOval from "./assets/OrangeOval.vue";
import BlueOval from "./assets/BlueOval.vue";

export default {
  name: "CarBrandsBlock",
  components: {
    Logos,
    OrangeOval,
    BlueOval,
    VueSlider
  },
  props: {
    src: String
  },
  data() {
    return {
      brands: [],
      priceRange: [1000000, 3000000],
      priceLimit: 5000000,
      priceCurrency: "₽",

      priceBgStyle: {
        background: "#2D3C4E55"
      },

      priceProcessStyle: {
        background: "linear-gradient(270deg, #FB8522 9.73%, #FEC73C 100%)"
      }
    };
  },
  methods: {
    formatPriceValue(value) {
      const whitespace = "&nbsp;";
      const formatNumber = x =>
        x
          .toString()
          .split("")
          .reverse()
          .join("")
          .replace(/(.{3})/g, "$1 ")
          .split("")
          .reverse()
          .join("")
          .trimEnd()
          .replace(/ /g, whitespace)
          .concat(whitespace)
          .concat(this.priceCurrency);

      if (!isNaN(value)) {
        return formatNumber(value);
      }

      if (Array.isArray(value) && value.length === 2) {
        return value.map(formatNumber).join(`${whitespace}-${whitespace}`);
      }

      return "ОШИБКА";
    }
  },
  mounted() {
    axios
      .get(this.src)
      .then(response => response.data)
      .then(data => {
        if (
          !Array.isArray(data) ||
          data.some(x => !x.brand || isNaN(x.car_count))
        )
          throw "Failed to get brands.";

        this.brands = data;
      })
      .catch(error => (this.brands = error));
  }
};
</script>

<style lang="scss">
@import "./vars.scss";

@font-face {
  font-family: Ubuntu Condensed;
  src: url("./assets/Ubuntu-C.ttf");
}

@font-face {
  font-family: Ubuntu;
  src: url("./assets/Ubuntu-M.ttf");
}

.CarBrandsBlock {
  background: $mainBackground;
  font-family: Ubuntu;
}

.CarBrandsBlock__title {
  font-family: Ubuntu Condensed;
  color: $mainColor;
}

.CarBrandsBlock__brand-count {
  opacity: 0.32;
}

.CarBrandsBlock__brands-error {
  color: red;
}

.CarBrandsBlock__price-tooltip {
  color: #2d3c4ecc;
}

.CarBrandsBlock__button {
  background: #2d3c4e;
  border: none;
  border-radius: 3px;
  color: #ffffff;
}

// Mobile
@media (max-width: $mobileMaxWidth) {
  .CarBrandsBlock {
    position: relative;
    height: 743px;
    overflow: hidden;
    min-width: $mobileMinWidth;
    font-size: 15px;
  }

  .CarBrandsBlock__stripe {
    display: none;
  }

  .CarBrandsBlock__centring {
  }

  .CarBrandsBlock__content {
    padding: 30px 50px 80px;
    max-height: $contentHeight;
  }

  .CarBrandsBlock__title {
    margin: 0;
    line-height: 33px;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: -0.4px;
  }

  .CarBrandsBlock__logos {
    display: none;
  }

  .CarBrandsBlock__brands {
    margin: 15px 0;
  }

  .CarBrandsBlock__brand {
    float: left;
    margin: 15px 0 0;
    width: 50%;
  }

  .CarBrandsBlock__brand-name {
    margin-left: 4px;
  }
  .CarBrandsBlock__brand-count {
    margin-left: 13px;
    font-weight: bold;
    font-size: 13px;
  }

  .CarBrandsBlock__price {
    clear: both;
    padding: 30px 0 55px;
  }

  .CarBrandsBlock__button {
    float: right;
    width: 100%;
    height: 50px;
    font-size: inherit;
  }

  .CarBrandsBlock__OrangeOval {
    display: none;
  }

  .CarBrandsBlock__BlueOval {
    display: none;
  }
}

// Desktop
@media (min-width: $desktopMinWidth) {
  .CarBrandsBlock {
    position: relative;
    height: $totalHeight;
    overflow: hidden;
    max-width: $desktopMaxWidth;
    font-size: 16px;
  }

  .CarBrandsBlock__stripe {
    background: linear-gradient(29.18deg, #01aeca 5.56%, #67c6a3 95.8%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $headStripeHeight;
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
    text-align: center;
    margin: 0;
    line-height: 58px;
    font-size: 48px;
    letter-spacing: -0.6px;
  }

  .CarBrandsBlock__logos {
    text-align: center;
    padding: 45px 0;
  }

  .CarBrandsBlock__brands {
    margin: 0 0 80px;
  }

  .CarBrandsBlock__brand {
    float: left;
    margin: 10px 0 0;
    width: $contentWidth / 5;
  }

  .CarBrandsBlock__brand-name {
    margin-left: 35px;
  }
  .CarBrandsBlock__brand-count {
    margin-left: 13px;
    font-weight: bold;
    font-size: 13px;
  }

  .CarBrandsBlock__price {
    width: 572px;
    float: left;
    margin: 15px 0 0;
  }

  .CarBrandsBlock__button {
    float: right;
    width: 224px;
    height: 56px;
    font-size: inherit;
  }

  .CarBrandsBlock__OrangeOval {
    position: absolute;
    top: 0;
    right: 1290px;
  }

  .CarBrandsBlock__BlueOval {
    position: absolute;
    top: 451 - $headStripeHeight;
    left: 476px;
    text-align: right;
  }
}
</style>
