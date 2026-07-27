//ClassesDeUmJogo
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const herois = [
    new Heroi("Merlin", 25, "mago"),
    new Heroi("Thanatos", 30, "guerreiro"),
    new Heroi("Eddga", 28, "monge"),
    new Heroi("Minato", 22, "ninja")
];

for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}