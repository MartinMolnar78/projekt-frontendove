<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
  
        <div class="form-group">
          <label for="surname">Surname:</label>
          <input type="text" id="surname" v-model="form.surname" required>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
  
        <div class="form-group">
          <label for="text">Text:</label>
          <textarea id="text" v-model="form.text" required></textarea>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useFormStore } from '../stores/formStore'; 
  
  export default {
    data() {
      return {
        form: useFormStore()
      };
    },
    created() {
      this.form.nacitanie();
    },
    methods: {
      handleSubmit() {
        this.form.submit();
        this.form.ulozenie();
        this.form.reset(); 
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../../src/assets/contact.css';
  </style>
  