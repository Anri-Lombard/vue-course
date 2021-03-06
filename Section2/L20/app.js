const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    setName(event, surname) {
      this.name = event.target.value + ' ' + surname;
    }
  }
});

app.mount('#events');
