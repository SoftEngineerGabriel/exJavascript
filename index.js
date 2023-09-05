//1. Declare um variável de nome weight
// let gabriel;
//2. Que tipo de dado é a variável acima?
// console.log(typeof gabriel)
//3. Declare uma variável e atribua valores para cada um dos dados
/*
    * name:String;
    * age:Number; (interger)
    * stars:Number; (float)
    * isSubscribed: Bolean;
*/
// let name = "gabriel"
// let age = 12
// let stars = 12.5
// let isSubscribed = false
//4. A variável student abaixo é de que tipo de dados?
// let student = {}
// console.log(typeof student)
//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
student = {
     name : "gabriel",
     age : 12,
     stars : 12.5,
     isSubscribed : false,
     weight: 30
}

// console.log(student)
//4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} pelos valores de cada objeto`)

//5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio
let students = []
//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
students = [
    student
]


//7. Coloque no console o valor da posição zero do array acima
// console.log(students[0])
//8. Crie um novo student e coloque ele na posição 1 do Array students

const jonh = {
    name: "jonh",
    age: 23,
    weight: 22,
    isSubscribed: true
}

students[1] = jonh
console.log(students[1])