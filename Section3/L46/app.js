Vue.createApp({
    data() {
        return {
            items: [],
            visibility: true,
            newItem: '',
        }
    },
    methods: {
        addItem() {
            this.items.push(this.newItem);
            this.newItem = '';
        },
        toggleVisibility() {
            this.visibility = !this.visibility;
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
}).mount('#assignment');