const app = Vue.createApp({
    data() {
        return {
            myAge: 18,
            randomNumber: Math.random(),
            myName: 'Anri Lombard',
            myImageLink: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Brian_Chesky_Airbnb.jpg',
        }
    },
    methods: {
        myAgeIn5Years() {
            return this.myAge + 5;
        }
    }
}).mount('#assignment');