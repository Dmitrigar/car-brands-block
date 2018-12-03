<template>
<main id="HomePage">
  <CarBrandsBlock class="HomePage__CarBrandsBlock" src="http://138.201.184.34:5000/api/resource/cars/brands" />
</main>
</template>

<script>
import CarBrandsBlock from "./CarBrandsBlock";
export default {
  name: "HomePage",
  components: {
    CarBrandsBlock
  }
};
</script>

<style>
.HomePage__CarBrandsBlock {
  margin: auto;
}
</style>
