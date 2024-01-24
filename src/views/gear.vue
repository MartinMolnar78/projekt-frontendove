<template>
    <div class="image-with-title">
      <img src="../../public/images/gear.jpeg" alt="gear" />
      <div class="title-container">
        <h1>Gear List</h1>
      </div>
    </div>
    <Audiogear/>
    <Videogear/>
  </template>
  <script>
  import Videogear from '../components/videogear.vue';
  import Audiogear from '../components/audiogear.vue';
  export default {
   components: {
        Audiogear,Videogear
    }
  };
  </script>
  <style scoped>
  @import '../../src/assets/gear.css';
  </style>