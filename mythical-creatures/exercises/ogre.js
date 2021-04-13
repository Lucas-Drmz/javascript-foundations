class Ogre {
    constructor(name, home = 'Swamp') {
        this.name = name, 
        this.home = home
    }
    encounter(human) {
        human.encounterCounter++
        console.log(human.noticesOgre())
    }
}

module.exports = Ogre