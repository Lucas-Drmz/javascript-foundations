var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name,
        this.statues = []
    }
    gazeAtVictim(victim) {
        let statue = new Statue(victim.name)
        if(this.statues.length < 3) {
            this.statues.push(statue)
        } else {
            let person = new Person(this.statues.shift())
            this.statues.push(statue)
        }
    }
}

module.exports = Medusa