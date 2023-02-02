var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

function ajustaTamanhoPalcoJogo()
{
    altura = window.innerHeight // Valores aleatórios
    largura = window.innerWidth // Valores aleatórios

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {

    tempo -= 1 // Decrementando 1 segundo

    if (tempo < 0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    else
    {
        document.getElementById('cronometro').innerHTML = tempo // Valor contido entre as tags
    }


} ,1000)

function posicaoRandomica()
{
    // Remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) // Fazendo a verificação se o id existe
    {
        document.getElementById('mosquito').remove() // Removendo o elemento na sequência

        if (vidas > 3)
        {
            window.location.href = 'game_over.html'
        }
        else
        {
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" // Removendo o coração cheiro e colocando o coração vazio automaticamente
   
            vidas++ // Vai adicionando o coração vazio substituindo o coração cheio
        }
        
    }
    
    var posicaoX = Math.floor(Math.random() * largura) - 90 // Gerando valor aleatório de acordo com a largura e altura do "palco"
    var posicaoY = Math.floor(Math.random() * altura) - 90 // Gerando valor aleatório de acordo com a largura e altura do "palco"

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando um elemento HTML (em forma programática)
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px' // Formando a coordenada em pixel
    mosquito.style.top = posicaoY + 'px' // Formando a coordenada em pixel
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove() // Remove o elemento (mosquito)
    }
    

    document.body.appendChild(mosquito) // Adicionando um "filho" ao body
}


function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3) // Número de 0 a 3
    
    switch (classe)
    {
        case 0:
            return 'mosquito1' // Classe

        case 1:
            return 'mosquito2' // Classe

        case 2:
            return 'mosquito3' // Classe
    }
}


function ladoAleatorio()
{
    var classe = Math.floor(Math.random() * 2) // Número de 0 a 2
    
    switch (classe)
    {
        case 0:
            return 'ladoA' // Classe

        case 1:
            return 'ladoB' // Classe
    }
}

