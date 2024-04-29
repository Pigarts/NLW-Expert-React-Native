export function formatCurrency(number:number) {
    return number.toLocaleString("pt-br", {
        style:"currency",
        currency:"BRL"
    })

}