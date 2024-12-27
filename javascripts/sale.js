const form = document.querySelector("form");
const purchases = [];

function addProduct() {
  purchases.push({
    price: parseInt(form.product.value),
    quantity: parseInt(form.quantity.value),
  });
  console.info("Current products", purchases);
  form.reset();
}

function calc() {
  const message = purchases.reduce((result, currentProduct) => {
    const messageLine = `${currentProduct.price}円： ${currentProduct.quantity}点\n`;
    result += messageLine;
    return result;
  }, "");

  const total = purchases.reduce((result, currentProduct) => {
    const subtotal = currentProduct.price * currentProduct.quantity;
    result += subtotal;
    return result;
  }, 0);

  window.alert(message + "\n" + `合計金額： ${total}円`);
}
