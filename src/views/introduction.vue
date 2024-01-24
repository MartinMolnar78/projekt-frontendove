<template>
<div class="image-container1">
    <img src="../../public/images/logo2.jpeg" alt="Logo">
</div>
<div class="grey-area">
        <p class="centered-text">Solarae Production covers wide variety of audio/visual productions and projects.<br>
            Need to release an Album or shoot a Narative film?<br> Our studio can provide all services, gear, crew, knowledge and locations for your project.</p>
        <div class="images-row">
            <img src="../../public/images/image1.webp" alt="Image 1">
            <img src="../../public/images/image2.webp" alt="Image 2">
            <img src="../../public/images/image3.webp" alt="Image 3">
        </div>
</div>
<Findout/>
</template>
<script>
import Findout from '../components/findout.vue';
export default {
    components: {
        Findout
    }
};
</script>