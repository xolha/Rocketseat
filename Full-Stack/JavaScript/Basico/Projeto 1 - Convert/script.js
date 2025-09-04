//cotação de moedas do dia
const USD = 5.45
const EUR = 6.36
const GBP = 7.33

//obtendo elementos
const form = document.querySelector("form");
/** @type {HTMLInputElement} */
const amount = document.getElementById("amount");
/** @type {HTMLInputElement} */
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const descricao = document.getElementById("descricao");
const resultado = document.getElementById("resultado");

//manipulando o ‘input’ valor para receber somente números
amount.addEventListener("input", () =>  {
    const hasCharactersRegex = /\D+/g //remove os caracteres que não são números
    amount.value = amount.value.replace(hasCharactersRegex, "") //os substitui por "nada"
})

//capturando o evento de 'submit(enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value){
        case "USD":
            converterMoeda(amount.value, USD, "US$")
            break
        case "EUR":
            converterMoeda(amount.value, EUR, "€")
            break
        case "GBP":
            converterMoeda(amount.value, GBP, "£")
            break
    }
}

//função para converter a moeda
function converterMoeda(amount, preco, simbolo) {
    try {
        //exibe a cotação da moeda selecionada
        descricao.textContent = `${simbolo} 1 = ${formatCurrencyBRL(preco)}`

        const total = amount * preco
        resultado.textContent = formatCurrencyBRL(total) //devido à tipagem rígida do WebStorm, tem que especificar que o meu total é um número e não uma ‘string’

        //aplica a classe que exibe o footer com o resultada da conversão
        footer.classList.add("show-result");
    } catch (err) {
        //remove a classe e oculta o footer
        console.error(err)
        footer.classList.remove("show-result");
        alert("Não foi possível converter! Tente novamente mais tarde.")
    }
}

//formata a moeda em Real
function formatCurrencyBRL(value) {
    //converte para número para utilizar o toLocaleString para formatar -> por causa da tipagem
    return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })
}