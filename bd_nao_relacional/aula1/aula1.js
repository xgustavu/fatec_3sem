
//exercicio 1
db.users.insertMany([
	{nome: "Pedro", idade: 25, genero: "M"},
	{nome: "Ana", idade: 20, genero: "F"},
	{nome: "Maria", idade: 21, genero: "F"},
	{nome: "Lucas", idade: 28, genero: "M"},
	{nome: "Joao", idade: 22, genero: "M"},
	{nome: "Renata", idade: 24, genero: "F"},
	{nome: "Paulo", idade: 23, genero: "M"},
	{nome: "Bruna", idade: 27, genero: "F"},
	{nome: "Irene", idade: 20, genero: "F"},
	{nome: "Yuri", genero: "M"},
])

//exercicio 2
db.users.find({
	genero: "F", idade: 20
})

//exercicio 3
db.users.find({},{nome:true, _id:false})

//exercicio 4
db.users.find({}, {nome:true, idade:true, _id:false}, {sort: {idade:1}, skip:2, limit:4})

//exercicio 5
db.users.findOne()

//exercicio 6
db.users.findOne({genero: "F", idade:20}, {nome:true, _id:false})

