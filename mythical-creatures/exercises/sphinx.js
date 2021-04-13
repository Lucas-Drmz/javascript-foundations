class Sphinx {
    constructor() {
        this.riddles = [], 
        this.heroesEaten = 0
    }
    collectRiddle(riddle) {
        if(this.riddles.length < 3) {
            this.riddles.push(riddle)
        } else {
            this.riddles.shift()
            this.riddles.push(riddle)
        }
    }
    attemptAnswer(answer) {
        this.riddles.forEach(riddle => {
            if(answer === riddle.answer) {
                this.riddles.splice(this.riddles.indexOf(riddle), 1);
            } 
        });
        return "That wasn\'t that hard, I bet you don\'t get the next one"
    }
}

module.exports = Sphinx