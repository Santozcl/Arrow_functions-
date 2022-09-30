import PromptSync = require('prompt-sync')
const prompt = PromptSync()

console.log('---Calculo do IMC---');

const peso = Number(prompt('Insira sua altura: '))
const altura = Number(prompt('insira seu peso: '))

const imc = (peso : number , altura : number) => peso /Math.pow(altura,2)

const Result = imc(peso,altura)

console.log(`Seu imc é ${Result}`)



