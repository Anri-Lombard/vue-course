Vue.createApp({
    data() {
        return {
            boxSelectedA: false,
            boxSelectedB: false,
            boxSelectedC: false,
        }
    },
    computed: {
        boxAClasses() {
            return {active: this.boxSelectedA};
        },
        boxBClasses() {
            return {active: this.boxSelectedB};
        },
        boxCClasses() {
            return {active: this.boxSelectedC};
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxSelectedA = !this.boxSelectedA;
            } else if (box === 'B') {
                this.boxSelectedB = !this.boxSelectedB;
            } else if (box === 'C') {
                this.boxSelectedC = !this.boxSelectedC;
            }
        },
    }

}).mount('#styling');