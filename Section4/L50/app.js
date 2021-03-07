function RandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            rivalHealth: 100,
            rival: "Covid",
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    watch: {
        playerHealth(value) {
            if (value == 0 && this.rivalHealth == 0) {
                // draw
                this.winner = 'draw';
            } else if (value == 0) {
                // lose
                this.winner = 'rival';
            }
        },
        rivalHealth(value) {
            if (value == 0 && this.playerHealth == 0) {
                // draw
                this.winner = 'draw';
            } else if (value == 0) {
                // lose
                this.winner = 'player';
            }
        },
    },
    computed: {
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        rivalBarStyles() {
            return {width: this.rivalHealth + '%'};
        },
    },
    methods: {
        restartGame() {
            this.playerHealth = 100;
            this.rivalHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        attackRival() {
            this.currentRound++;
            const attackValue = RandomValue(5,13);
            this.rivalHealth -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = RandomValue(8,15);
            if (this.playerHealth - attackValue < 0) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= attackValue;
            }
            this.addLogMessage('rival', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = RandomValue(10,25);
            if (this.rivalHealth - attackValue < 0) {
                this.rivalHealth = 0;
            } else {
                this.rivalHealth -= attackValue;
            }
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = RandomValue(10,15);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'rival';
        },
        addLogMessage(who, what, amount) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: amount,
            });
        }
    },
}).mount('#game');

// What experience do I want? Rivalry.