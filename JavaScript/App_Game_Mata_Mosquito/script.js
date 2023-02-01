var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo()
{
    altura = window.innerHeight // Valores aleatórios
    largura = window.innerWidth // Valores aleatórios

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica()
{
    var posicaoX = Math.floor(Math.random() * largura) - 90 // Gerando valor aleatório de acordo com a largura e altura do "palco"
    var posicaoY = Math.floor(Math.random() * altura) - 90 // Gerando valor aleatório de acordo com a largura e altura do "palco"

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando um elemento HTML (em forma programática)
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px' // Formando a coordenada em pixel
    mosquito.style.top = posicaoY + 'px' // Formando a coordenada em pixel
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito) // Adicionando um "filho" ao body
}

