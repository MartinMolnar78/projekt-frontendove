
import { defineStore } from 'pinia';
import pricingData from '../pricing.json';

export const useCenovky = defineStore('cenovky', {
  state: () => ({
    pricing: pricingData.cenovky,
  }),
});

export const useAudio = defineStore('audio', {
  state: () => ({
    audio: pricingData.audio,
  }),
});

export const useVideo = defineStore('video', {
  state: () => ({
    video: pricingData.video,
  }),
});
