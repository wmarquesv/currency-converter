//Variaveis das moedas
let USD = 5.67
let EUR = 6.34
let GBP = 7.55

//Elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")


// Manipulando o input para receber somente numeros
amount.addEventListener("input", () => {
    
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
    
})

// Captando o submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //classList.add = aplica classes já existentes no codigo css
        footer.classList.add("show-result")
    } catch (error) {
        //classList.remove = remove a class em caso de erro
        footer.classList.remove("show-result")
        
        alert("Não foi possível converter. Tente novamente mais tarde")
        console.log(error)
    }
}