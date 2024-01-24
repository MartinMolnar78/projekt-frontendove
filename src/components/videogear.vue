<template>
<div class="video-list">
  <p class="nadpis">Video</p>
    <div v-for="item in video.video" :key="item.id" class="video-item">
      <h2>{{ item.nazov }}</h2>
      <p>{{ item.popis }}</p>
    </div>
</div>
</template>
<style scoped>
@import '../../src/assets/gear.css';
</style>

<script>
import { useVideo } from '@/stores/pricing.js';
export default {
  data() {
    return {
      video: null
    };
  },
  created() {
    this.video = useVideo();
  }
};
</script>
