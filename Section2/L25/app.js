const app = Vue.createApp({
    data() {
        return {
            user: '',
            confirmedUser: '',
        };
    },
    methods: {
        alertMessage(message) {
            alert(message);
        },
        registerUser(event) {
            this.user = event.target.value;
        },
        setUser() {
            this.confirmedUser = this.user;
        }
    }
}).mount('#assignment');