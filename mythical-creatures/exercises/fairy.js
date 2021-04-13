class Fairy {
  constructor(name, dust = 10, disposition = 'Good natured'){
    this.name = name, 
    this.dust = dust,
    this.clothes = {dresses: ['Iris']},
    this.disposition = disposition
  }
  receiveBelief(){
    this.dust += 1
  }
  believe(){
    this.dust += 10
  }
  makeDresses(flowers) {
    for(let i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i])
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
      infant.disposition = 'Malicious'
  }
}

module.exports = Fairy