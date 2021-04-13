const Direwolf = require("./direwolf")

class Stark {
  constructor(name, location = 'Winterfell') {
    this.name = name, 
    this.location = location, 
    this.safe = false
  }
  sayHouseWords() {
    if(this.safe != false) {
      return 'The North Remembers'
    } else {
      return 'Winter is Coming'
    }
  }
  callDirewolf(direwolf) {
    let personalDirewolf = new Direwolf(direwolf)
    personalDirewolf.protect()
  }
}

module.exports = Stark