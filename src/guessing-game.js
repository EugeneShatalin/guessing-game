class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.resultNumber = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.resultNumber = Math.round((this.min + this.max) / 2);
        return this.resultNumber;
    }

    lower() {
        this.max = this.resultNumber;
    }

    greater() {
        this.min = this.resultNumber;
    }
}

module.exports = GuessingGame;
