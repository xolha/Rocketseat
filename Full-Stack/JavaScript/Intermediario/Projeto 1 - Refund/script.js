//webstorm para de reclamar por favor
/** @type{HTMLSelectElement} */
const category = document.getElementById("category");

//seleciona os elementos do formulário
const form = document.querySelector("form");

/** @type{HTMLSelectElement} */
const amount = document.getElementById("amount");

/** @type{HTMLSelectElement} */
const expense = document.getElementById("expense");

const expenseList = document.querySelector("ul")
const expensesQuantity = document.querySelector("aside header p span") //pega o elemento que está dentro do span (tem que seguir toda essa hierarquia
const expensesTotal = document.querySelector("aside header h2")

//o campo receberá apenas números
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")

    //transforma o valor em centavos
    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value);
}

function formatCurrencyBRL(value) {
    //formata no padrão BRL
    value = Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    //retorna o valor já formatado
    return value
}

//faz com que a página não seja recarregada ao enviar o formulário
form.onsubmit = (event) => {
    event.preventDefault();

    //nova despesa
    const newExpense = {
        id: new Date().getTime(), //pegar o timestamp
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        create_at: new Date(),
    }

    expenseAdd(newExpense); //chama a função que irá adicionar o item na lista
}

//adiciona um novo item na lista
function expenseAdd(newExpense) {
    try {
        //cria o elemento para adicionar o item (LI) na lista (UL)
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense"); //estiliza o li -> atribui uma categoria a ele

        //cria o ícone da categoria
        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute("alt", newExpense.category_name);

        //cria a info da despesa
        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");

        //cria o nome da despesa
        const expenseName =document.createElement("strong");
        expenseName.textContent = newExpense.expense

        //cria a categoria da despesa
        const expenseCategory = document.createElement("span");
        expenseCategory.textContent = newExpense.category_name;

        //adiciona nome e categoria na div das informações da despesa
        expenseInfo.append(expenseName, expenseCategory);

        //cria o valor da despesa
        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount. //atraves do innerHTML é possível escrever algo numa tag já existente, da mesma forma que você escreveria no HTML
        toUpperCase().replace("R$", "")}`

        //cria o ícone de remover
        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.setAttribute("src", `img/remove.svg`);
        removeIcon.setAttribute("alt", "remover");

        //adiciona as informações do item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        //adiciona o item na lista
        expenseList.append(expenseItem); //tem que lembrar de sempre colocar um "append" para programa saber para onde esse documento tem que ser criado

        //atualiza os totais
        updateTotals();
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas");
        console.log(error)
    }
}

//atualiza os totais
function updateTotals () {

    try {
        //recupera todos os itens (li's) da lista
        const items = expenseList.children;

        //atualiza a quantidade de itens da lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa" }`;

        //incrementa total
        let total = 0;

        for (let item = 0; item < items.length; item++) {
            const itemAmount =  items[item].querySelector(".expense-amount");

            //remove caracteres não numéricos e substitui vírgula por ponto
            let value = itemAmount.textContent
                .replace(/[^\d,]/g, "")   // remove tudo que não for número ou vírgula
                .replace(/\./g, "")       // remove pontos de milhar
                .replace(",", ".");

            //converte o valor para float
            value = parseFloat(value);

            //verifica se é um número valido
            if (isNaN(value)) {
                return alert("Não foi possível calcular o total. O valor não parece ser um número")
            }

            //incrementa o total
            total += Number(value);
        }

        expensesTotal.textContent = ""; // limpa
        const symbolBRL = document.createElement("small");
        symbolBRL.textContent = "R$";

// formata o valor sem o "R$" (que já vai ser adicionado pela <small>)
        let formattedTotal = formatCurrencyBRL(total).replace("R$", "").trim();

        //limpa o formulário para adicionar um novo item
        formClear(

        )
// adiciona símbolo + valor
        expensesTotal.append(symbolBRL, formattedTotal);

    } catch (error) {
        console.log(error)
        alert("Erro ao atualizar os totais.")
    }
}

//evento que captura clique nos itens da lista
expenseList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-icon")) {
        //obtém a li do pai clicado
        const item = event.target.closest(".expense"); //pega o item mais próximo do pai, que no caso é a imagem do ícone

        //remove o item da lista
        item.remove();
    }

    //atualiza o total
    updateTotals();
})

//apenas para melhorar a experiência do usuário → limpa os campos após o envio e retorna para o 'input' principal
function formClear() {
    expense.value = ""
    category.value = ""
    amount.value = ""

    expense.focus()
}

