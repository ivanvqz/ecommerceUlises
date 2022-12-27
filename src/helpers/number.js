// export const formatPrice = (amount, currency = 'MXN') => {
//     return new Intl.NumberFormat("es-MX", {
//         style: "currency",
//         currency: currency,
//         currencyDisplay: "symbol",
//         }).format(amount)
// }
export const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol",
        }).format(amount)
}

export const formatRating = (rating) => {
        // if (typeof rating !== 'number') {
        //     throw new TypeError('El argumento "rating" debe ser un número.')
        // }
    return Number(rating).toFixed(1)
}

export const getInstallments = (price, number) => {
    const monthPrice = price / 12
    return `${number} x ${formatPrice(monthPrice)} sin interés`
}

// export const formatPrice = (amount) => {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//         currencyDisplay: "narrowSymbol",
//         }).format(amount)
// }

// export const formatRating = (rating) => {
//     return Number(rating).toFixed(1)
// }

// export const getInstallments = (price, number) => {
//     const monthPrice = price / 12
//     return `${number} x ${formatPrice(monthPrice)} sin interés`