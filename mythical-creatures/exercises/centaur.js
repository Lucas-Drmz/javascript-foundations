class Centaur {
  constructor(name, type) {
    this.name = name,
    this.breed = type,
    this.cranky = false, 
    this.standing = true
  }
  shootBow(){
    return `Twang!!!`
  }
  run(){
    return `Clop clop clop clop!!!`
  }
}

module.exports = Centaur