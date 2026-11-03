const nomeMaterial = "Chave de fenda";
const quantidade = 15;
const precoUnitario = 18.75;
const taxaEntrega = 6;
const subtotal = quantidade * precoUnitario;
const valorFinal = subtotal + taxaEntrega;
console.log("Nome do material:", nomeMaterial);
console.log("Quantidade:", quantidade);
console.log("Subtotal: R$", subtotal.toFixed(2));
console.log("Taxa de entrega: R$", taxaEntrega.toFixed(2));
console.log("Valor final: R$", valorFinal.toFixed(2));
// O subtotal calcula apenas o valor dos produtos, a quantidade em relação ao preço. Já o total adionada a essa equação a taxa de entrega.
