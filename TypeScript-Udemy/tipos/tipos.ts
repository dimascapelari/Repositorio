// string
let nome: string = 'João'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Dimas'
idade = 27.5
console.log(idade)

// booblean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 40
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 40'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av Principal", 90]
console.log(endereco)
let endereco2: [string, number, string] = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco2)