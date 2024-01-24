import { defineStore } from 'pinia';
export const useFormStore = defineStore('form', {
  state: () => ({
    name: '',
    surname: '',
    email: '',
    text: ''
  }),
  actions: {
    nacitanie() {
      const storedForm = localStorage.getItem('Form');
      if (storedForm) {
        this.$patch(JSON.parse(storedForm));
      }
    },
    ulozenie() {
      localStorage.setItem('Form', JSON.stringify(this.$state));
    },
    submit() {
      console.log(this.$state);
    },
    reset() {
      this.$reset();
    }
  }
});
