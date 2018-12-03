<template>
<main id="BrandPage">
  <h2>{{$route.params.data.brand}}</h2>
  <span>{{$route.params.data.car_count}}</span>
</main>
</template>

<script>
export default {
  name: "BrandPage"
};
</script>
