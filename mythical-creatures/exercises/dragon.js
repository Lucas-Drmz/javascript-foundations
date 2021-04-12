class Dragon {
  constructor(name, rider){
    this.name = name,
    this.rider = rider,
    this.hungry = true, 
    this.hasEaten = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.hasEaten++
    this.hungry = this.hasEaten <= 2
  }
}

module.exports = Dragon