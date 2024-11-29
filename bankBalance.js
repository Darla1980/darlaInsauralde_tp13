let opBancarias = [1000, -2000, -1500, -2500, 500, 1500];
function calculateBalance(opBancarias) {
    let totalDepositos = 0;
    let actualRetiros = 0;
    let actualCliente = 0;
    for (let i = 0; i < opBancarias.length; i++) {
        if (opBancarias[i] > 0) {
            totalDepositos = totalDepositos + opBancarias[i];
        }
        else{
            actualRetiros += opBancarias[i];
        }
    }
    actualCliente = totalDepositos - actualCliente;
    return (`El monto total de los depósitos es de: ${totalDepositos}
        El monto total de los retiros es de: ${actualRetiros}
        Por lo tanto, su saldo actual en la cuenta es de: ${actualCliente}`)
}
// console.log(calculateBalance(opBancarias));

function bankBalance(nombre, apellido, opBancarias) {
    let saldos = calculateBalance(opBancarias);
    return (`Estimada ${nombre} ${apellido} ${saldos}`);
}
console.log(bankBalance("Gloria", "Medina", opBancarias));

