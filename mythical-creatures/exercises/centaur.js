class Centaur {
  constructor(name, breed) {
    this.name = name,
    this.breed = breed,
    this.cranky = false, 
    this.standing = true, 
    this.layingDown = false,
    this.hasDoneSomething = 0
  }
  shootBow(){
    if(this.cranky != true && this.layingDown != true) {
      this.hasDoneSomething++
      this.cranky = this.hasDoneSomething > 2
      return `Twang!!!`
    } else {
      return 'NO!'
    }
  }
  run(){
    if(this.cranky != true && this.layingDown != true) {
      this.hasDoneSomething++
      this.cranky = this.hasDoneSomething > 2
      return `Clop clop clop clop!!!`
    } else {
      return 'NO!'
    }
  }
  sleep() {
    if(this.standing != false) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    if(this.standing != false) {
      this.cranky = false
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur