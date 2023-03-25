
const button = document.getElementById("button")
let nomes = []
let numeros = []
let linhas = ''

function pressButton(e) {
    e.preventDefault()

    addLinha()
    atualizaTabela()

}

function addLinha() {
    const inputNome = document.getElementById("nome")
    const inputNumero = document.getElementById("numero")
    if (nomes.includes(inputNome.value)) {
        alert(`O nome: " ${inputNome.value} " já esta na lista`);
    }
    else if (numeros.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já esta na lista`);
    }
    else {
        nomes.push(inputNome.value)
        numeros.push(inputNumero.value)
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += '</tr>'
        linhas += linha
    }


    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela() {
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = linhas
}

button.addEventListener('click', pressButton);
