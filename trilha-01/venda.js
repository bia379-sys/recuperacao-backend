const produto = "Parafuso";
const quantidade = 8;
const precoUnitario = 3.75; // o preço unitário do produto é multiplicado pela quantidade para calcular o total da compra
const desconto = 5;
const total = quantidade * precoUnitario;
const valorFinal = total - desconto;
console.log("Produto:", produto);
console.log("Total: R$", total.toFixed(2));
console.log("Desconto: R$", desconto.toFixed(2));
console.log("Valor final: R$", valorFinal.toFixed(2));