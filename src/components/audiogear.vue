<template>
    <div class="video-list">
      <p class="nadpis">Audio</p>
        <div v-for="item in audio.audio" :key="item.id" class="video-item">
          <h2>{{ item.nazov }}</h2>
          <p>{{ item.popis }}</p>
        </div>
    </div>
</template>

<style scoped>
@import '../../src/assets/gear.css';
</style>

<script>
import { useAudio } from '@/stores/pricing.js';
export default {
  data() {
    return {
      audio: null
    };
  },
  created() {
    this.audio = useAudio();
  }
};
</script>
