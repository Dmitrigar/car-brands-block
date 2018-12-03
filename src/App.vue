<template>
<main id="app">
  <CarBrandsBlock class="app_CarBrandsBlock" src="http://138.201.184.34:5000/api/resource/cars/brands" />
</main>
</template>

<style>
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
