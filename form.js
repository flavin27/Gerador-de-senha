import geraSenha from "./gerador";

const senhaGerada = document.getElementById('senha')
const qtdCaracteres = document.getElementById('qtd')
const checkMaiusculas = document.getElementById('maiusculas')
const checkMinusculas = document.getElementById('minusculas')
const checkNumeros = document.getElementById('numeros')
const checkSimbolos = document.getElementById('simbolos')
const botao = document.getElementById('gerar')

export default () =>{
    botao.addEventListener(click, () => {

    })
}
function gerar() {
    const senha = geraSenha(qtdCaracteres.ariaValueMax, checkMaiusculas.checked, checkMinusculas.checked, checkNumeros,checked, checkSimbolos.checked ) 
}
