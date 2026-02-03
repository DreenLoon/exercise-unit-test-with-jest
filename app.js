const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)





// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (USDollar) => {
    let dollarEuro = USDollar / oneEuroIs.USD
    return dollarEuro * oneEuroIs.JPY
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}

const fromYenToPound = (yen) => {
    let yenEuro = yen / oneEuroIs.JPY
    return yenEuro * oneEuroIs.GBP
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };