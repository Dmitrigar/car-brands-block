<template>
<div>
  <RenaultLogo class="CarBrandsBlock__logo" />
  <FordLogo class="CarBrandsBlock__logo" />
  <VolkswagenLogo class="CarBrandsBlock__logo" />
  <HyundaiLogo class="CarBrandsBlock__logo" />
  <NissanLogo class="CarBrandsBlock__logo--circled" />
  <KiaLogo class="CarBrandsBlock__logo" />
  <SkodaLogo class="CarBrandsBlock__logo" />
  <LadaLogo class="CarBrandsBlock__logo" />
  <ToyotaLogo class="CarBrandsBlock__logo" />
</div>
</template>

<style lang="scss">
.CarBrandsBlock__logo {
  display: inline;
  margin: 0 12px;
  border-radius: 35px;
}
.CarBrandsBlock__logo--circled {
  @extend .CarBrandsBlock__logo;
  background: #ffffff;
}
</style>

<script>
import RenaultLogo from "./assets/RenaultLogo.vue";
import FordLogo from "./assets/FordLogo.vue";
import VolkswagenLogo from "./assets/VolkswagenLogo.vue";
import HyundaiLogo from "./assets/HyundaiLogo.vue";
import NissanLogo from "./assets/NissanLogo.vue";
import KiaLogo from "./assets/KiaLogo.vue";
import SkodaLogo from "./assets/SkodaLogo.vue";
import LadaLogo from "./assets/LadaLogo.vue";
import ToyotaLogo from "./assets/ToyotaLogo.vue";

export default {
  name: "Logos",
  components: {
    RenaultLogo,
    FordLogo,
    VolkswagenLogo,
    HyundaiLogo,
    NissanLogo,
    KiaLogo,
    SkodaLogo,
    LadaLogo,
    ToyotaLogo
  }
};
</script>
