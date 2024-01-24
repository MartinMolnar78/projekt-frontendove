<template>
    <div class="image-with-title">
      <img src="../../public/images/pricing.jpeg" alt="pricing" />
      <div class="title-container">
        <h1>Pricing</h1>
      </div>
      </div>
      <div class="pricing-list">
    <div v-for="item in cenovka.pricing" :key="item.id" class="pricing-item">
      <h2>{{ item.nazov }}</h2>
      <button @click="navigateTo(item.id)">More</button>
        </div>
  </div>
  </template>

<script>
import { useCenovky } from '../stores/pricing';
import router from '../router/index'; 
export default {
  data() {
    return {
      cenovka: null,
    };
  },
  created() {
    this.cenovka = useCenovky();
  },
  methods: {
    navigateTo(itemId) {
      router.push({ name: 'pricingDetails', params: { id: itemId } });
    }
  }
};
</script>
  
  <style scoped>
  @import '../assets/pricing.css';
  </style>