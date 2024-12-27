const form = document.querySelector("form");
const products = [];

function addProduct() {
  products.push({
    price: parseInt(form.product.value),
    quantity: parseInt(form.quantity.value),
  });
  console.info("Current products", products);
  form.reset();
}

function calc() {
  const message = products.reduce((result, currentProduct) => {
    const messageLine = `${currentProduct.price}円： ${currentProduct.quantity}点\n`;
    result += messageLine;
    return result;
  }, "");

  const total = products.reduce((result, currentProduct) => {
    const subtotal = currentProduct.price * currentProduct.quantity;
    result += subtotal;
    return result;
  }, 0);

  window.alert(message + "\n" + `合計金額： ${total}円`);
}
