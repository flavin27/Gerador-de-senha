const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiusculas = () => String.fromCharCode(rand(65, 91))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const simbolos = ',.;-_+=~^'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]
const geraNumero = () => String.fromCharCode(rand(48, 58))

function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhas = []
    for (let i = 0; i < qtd; i++) {
        maiusculas && senhas.push(geraMaiusculas())
        minusculas && senhas.push(geraMinuscula())
        simbolos && senhas.push(geraSimbolo())
        numeros && senhas.push(geraNumero())
    }

    return senhas.join('').slice(0, qtd)
}

const senhaGerada = document.getElementById('senha')
const qtdCaracteres = document.getElementById('qtd')
const checkMaiusculas = document.getElementById('maiusculas')
const checkMinusculas = document.getElementById('minusculas')
const checkNumeros = document.getElementById('numeros')
const checkSimbolos = document.getElementById('simbolos')
const botao = document.getElementById('gerar')

botao.addEventListener('click', () => {
    const qtd = qtdCaracteres.value
    senhaGerada.innerHTML = geraSenha(qtd, checkMaiusculas.checked, checkMinusculas.checked, checkNumeros.checked, checkSimbolos.checked)
})
