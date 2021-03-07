const app = Vue.createApp({
    data() {
        return {
            numberToFind: Math.floor(Math.random() * Math.floor(50)),
            guess: 0,
            result: '',
        };
    },
    computed: {
        currentGuess() {
            return this.guess;
        }
    },
    methods: {
        less(num) {
            this.guess -= num;
        },
        add(num) {
            this.guess += num;
        },
        verdict() {
            if (this.guess < this.numberToFind) {
                this.result = "Too Low!"
            } else if(this.guess === this.numberToFind) {
                this.result = "You win! Go Again!";
                setTimeout(() => {
                    this.guess = 0;
                    this.numberToFind = Math.floor(Math.random() * Math.floor(50))
                }, 2000);
            } else {
                this.result = "Too High!"
            }
            setTimeout(() => {
                this.result = '';
            }, 2000);
        }
    },
}).mount('#assignment');