let aceitar = true

const promessa = new Promise ((resolve, reject) => {
    if (aceitar) {
        console.log("pedido aceito")
    }
    return rejecta("pedido negado!")

})

console.log("Aguardadno");

promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log("finalizado"))