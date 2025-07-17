

// Desafio do Herói tem o  objetivo de mostrar a Classe do nosso Herói baseado no nível de XP.
// Foi usando o modulo readline do NODE para poder pegar as respostas dos usuários ja que ele roda no terminal.


const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntarHeroi(){
    rl.question("Digite o nome do(a) Herói (ou 'sair' para sair do programa): ", function (nome){
        if(nome.toLowerCase() == "sair"){
            console.log("Pograma encerrado")
            rl.close()
            return
        }


        rl.question(`Digite o XP do(a) Herói ${nome}: `,function(xpInput){
            let xpHeroi = parseFloat(xpInput)
            let nivel = ""

            if(xpHeroi <= 1000){
                nivel = "Ferro"
            }else if (xpHeroi >= 1001 && xpHeroi <= 2000 ){
                nivel = "Bronze"
            }else if (xpHeroi >= 2001 && xpHeroi <= 5000){
                nivel = "Prata"
            }else if (xpHeroi >= 5001 && xpHeroi <= 7000){
                nivel = "Ouro"
            }else if (xpHeroi >= 7001 && xpHeroi <= 8000){
                nivel = "Platina"
            }else if (xpHeroi >= 8001 && xpHeroi <= 9000){
                nivel = "Ascendente"
            }else if (xpHeroi >= 9001 && xpHeroi <= 10000){
                nivel = "Imortal"
            }else if (xpHeroi >= 10001){
                nivel = "Radiante"
            }else{
                nivel = "Indefinida"
                console.log("O XP digitado é inválido.")
            }    

            console.log(`O Herói ${nome}, é da Classe ${nivel}`)
            console.log("")

            perguntarHeroi()

        })
    })
}

perguntarHeroi()

   



    




