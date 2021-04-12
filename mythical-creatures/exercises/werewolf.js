class Werewolf {
  constructor(name, form = "human"){
    this.name = name, 
    this.form = form, 
    this.hungry = false
  }
  completeTransformation() {
    if(this.form != "wolf") {
      this.form = "wolf"
      this.hungry = true
      console.log(this.form)
      return 'Aaa-Woooo!' 
    } else {
        this.form = "human"
        this.hungry = false
        console.log(this.form)
        return "Where are I?"
    }
  }
  eatVictim(victim) {
    if(this.hungry != false) {
      victim.alive = false
      this.form = "human"
      return `Yum, ${victim.name} was delicious.`
    } else {
      return `No way am I eating ${victim.name}, I'd like a burger!`
    }
  }
}

module.exports = Werewolf