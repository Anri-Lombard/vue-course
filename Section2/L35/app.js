Vue.createApp({
    data() {
        return {
            userInput: '',
            visibility: true,
            inputBackgroundColor: '',
        };
    },
    computed: {
        classStyling() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.visibility,
                hidden: !this.visibility
            }
        },
    },
    methods: {
        toggleVisibility() {
            this.visibility = !this.visibility;
        },
    }
}).mount('#assignment');