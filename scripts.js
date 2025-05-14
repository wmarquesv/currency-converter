const amount = document.getElementById("amount")


// Manipulando o input para receber somente numeros 
amount.addEventListener("input", () => {
    
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
    
})