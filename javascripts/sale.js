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
    const messageLine = `${currentProduct.price}円: ${currentProduct.quantity}点\n`;
    result += messageLine;
    return result;
  }, "");

  const itemTotal = purchases.reduce((result, currentProduct) => {
    const subtotal = currentProduct.price * currentProduct.quantity;
    result += subtotal;
    return result;
  }, 0);

  const shippingFee = _shippingFee(itemTotal);
  const orderTotal = itemTotal + shippingFee;

  window.alert(
    message +
      "\n" +
      `送料: ${shippingFee}円` +
      "\n" +
      `合計金額: ${orderTotal}円`
  );

  function _shippingFee(itemTotal) {
    if (itemTotal === 0) {
      return 0;
    } else if (itemTotal < 2000) {
      return 500;
    } else if (2000 <= itemTotal < 3000) {
      return 250;
    } else if (itemTotal >= 3000) {
      return 0;
    }
  }
}
