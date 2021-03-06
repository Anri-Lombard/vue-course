const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  }
});

app.mount('#events');
