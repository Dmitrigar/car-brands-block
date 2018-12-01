<template>
<main id="app">
  <CarBrandsBlock class="app_CarBrandsBlock" />
</main>
</template>

<style>
@font-face {
  font-family: Ubuntu Condensed;
  src: url("./assets/Ubuntu-C.ttf");
}

html,
body {
  margin: 0;
  padding: 0;
}

.app_CarBrandsBlock {
  margin: auto;
}
</style>


<script>
import CarBrandsBlock from "./CarBrandsBlock";
export default {
  name: "app",
  components: {
    CarBrandsBlock
  }
};
</script>
