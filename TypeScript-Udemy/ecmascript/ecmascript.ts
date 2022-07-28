// let & const
// console.log(seraQuePode)
// var seraQuePode = '?' // hoisting

let seraQuePode = '?'
console.log(seraQuePode)


// let estaFrioVar = true
// if (estaFrioVar) {
//     var acaoVar = 'Colocar o casaco!'
// }
// console.log(acaoVar)


let estaFrioLet = true
if (estaFrioLet) {
    let acaoLet = 'Colocar o casaco!'
    console.log(acaoLet)
}

const cpf: string = '123.456.000-99'
// cpf = "789.101.132-78"
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    const segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        var def = 'def'
        console.log(def)
    }
    console.log(def)
}
console.log(def)


for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i)


// Arrow Function
const somar = function (n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá!')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('Dimas')


// // this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind(2)
// normalComThisEspecial()

// // this???
// const arrowComThis = () => console.log(this)
// arrowComThis()


/*
// Parâmetro padrão
function contagemRegressiva(inicio: number = 3): void {
    console.log(inicio)
    while (inicio > 0) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}
contagemRegressiva()
contagemRegressiva(5)
*/

// Parâmetros padrão
function contagemRegressiva(inicio: number = 5,
    fim: number = inicio - 5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(3)