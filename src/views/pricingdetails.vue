<template>
  <div class="pricing-details-wrapper">
    <div class="pricing-details" v-if="pricingItem">
      <h1>{{ pricingItem.nazov }}</h1>
      <p>{{ pricingItem.popis }}</p>
      <p>Price: {{ pricingItem.cena }}</p>
    </div>
  </div>
</template>
<script>
import { useCenovky } from '../stores/pricing.js';
export default {
  data() {
    return {
      pricingItem: null,
    };
  },
  mounted() {
    const store = useCenovky();
    const id = parseInt(this.$route.params.id, 10);
    this.pricingItem = store.pricing.find(p => p.id === id);
  }
};
</script> 

<style>
@import '../assets/pricing.css';
</style>
