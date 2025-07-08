//Entrega do exercício do projeto:

let nameUser = "Felipão dos Pokemon"
let xpLevel = "7845"

/*LEGENDA:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

console.log("Olá " + nameUser)
if (xpLevel <= 999){
   console.log("Seu Level é Ferro")
}else if(xpLevel >= 1001 && xpLevel <=2000){
	console.log("Seu Level é Bronze")
}else if(xpLevel >= 2001 && xpLevel <=5000){
	console.log("Seu Level é Prata")
}else if(xpLevel >= 5001 && xpLevel <=7000){
	console.log("Seu Level é Ouro")
}else if(xpLevel >= 7001 && xpLevel <=8000){
	console.log("Seu Level é Platina")
}else if(xpLevel >= 8001 && xpLevel <=9000){
	console.log("Seu Level é Ascendente")
}else if(xpLevel >= 9001 && xpLevel <=10000){
	console.log("Seu Level é Imortal")
}else if (xpLevel >= 10001){
	console.log("Seu Level é Radiante")
}else{
    console.log("Olá. Você está fora da pontuação")
}