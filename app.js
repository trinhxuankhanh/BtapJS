var orders = [
    { name: 'A', quantiny: 2, unitPrice: 100 },
    { name: 'B', quantiny: 1, unitPrice: 400 },
    { name: 'C', quantiny: 5, unitPrice: 15 }
]

// var totalUnitPrice = orders.map(item => {
//     return item.quantiny * item.unitPrice
// })

// var totalPrice = totalUnitPrice.reduce((a, b) => {
//     return a + b
// })

var totalPrice = orders.reduce((a, b) => {
    return a + b.quantiny * b.unitPrice
}, 0)

console.log(totalPrice);