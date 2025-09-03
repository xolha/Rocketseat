const valor = document.getElementById("valor");

//manipulando o ‘input’ valor para receber somente números
valor.addEventListener("input", () =>  {
    const hasCharectersRegex = /\D+/g //remove os caracteres que não são números
    valor.value = valor.value.replace(hasCharectersRegex, ""); //os substitui por "nada"
})