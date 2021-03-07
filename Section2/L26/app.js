const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      };
    }
  },
  // Used as data properties, so name it as such.
  // Best for performance (To change a certain dependancy instead of reloading entire page when any dependency changes).
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.firstName === '') {
        return '';
      }
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    inputReset() {
      this.firstName = "";
      this.lastName = '';
    }
  }
});

app.mount('#events');
