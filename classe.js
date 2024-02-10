class hero{
    constructor(name, age, type, attack){
    this.name = name
    this.age = age
    this.type = type
    this.attack = attack
    }
    escrever(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let guerreiro = new hero("Raffa", 28, "guerreiro", "golpe de espada")
let mago = new hero("Raffa", 28, "mago", "magia")
let monge = new hero("Raffa", 28, "monge", "artes marciais")
let ninja = new hero("Raffa", 28, "ninja", "shuriken")

guerreiro.escrever()
mago.escrever()
monge.escrever()
ninja.escrever()