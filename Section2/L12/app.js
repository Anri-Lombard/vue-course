const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'This couseGoalA is an amazing goal!',
            courseGoalB: 'This couseGoalB is also good',
            vueLink: 'https://vuejs.org/',
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
})

app.mount('#user-goal')