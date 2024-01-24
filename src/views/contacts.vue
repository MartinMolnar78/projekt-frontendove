<template>
  <div class="image-with-title">
    <img src="../../public/images/gitara.jpg" alt="gitara" />
    <div class="title-container">
      <h1>Contact us!</h1>
    </div>
  </div>
  <div class="telo">
    <div class="contact-container">
      <div class="image-side">
        <img src="../../public/images/logo1.jpg" alt="Your Image">
      </div>
      <div class="text-side">
        <p class="pp">Address:</p>
        <p>Partizánska 2, 942 01 Šurany</p>
        <p class="pp">Phone Number:</p> 
        <p>+421 918 999 999</p>
        <p class="pp">E-mail:</p>
        <p> contact@solaraeproduction.com</p>
        <p class="pp">Open:</p> 
        <p> Monday-Sunday 8AM - 9PM</p>
      </div>
    </div>
    <Formular/>
  </div>
</template>



<script>
import Formular from '../components/form.vue';
export default {
    components: {
        Formular
    }
};
</script>
  
  <style scoped>
@import '../../src/assets/contact.css';
  </style>