const form = document.querySelector("form");
const purchases = [];

function addToCart() {
  purchases.push({
    price: parseInt(form.product.value),
    quantity: parseInt(form.quantity.value),
  });
  window.alert(itemsInCartMessage());
  form.reset();
}

function itemTotal() {
  return purchases.reduce((result, currentProduct) => {
    const subtotal = currentProduct.price * currentProduct.quantity;
    result += subtotal;
    return result;
  }, 0);
}

function itemLines() {
  return purchases.reduce((result, currentProduct) => {
    const messageLine = `${currentProduct.price}円: ${currentProduct.quantity}点\n`;
    result += messageLine;
    return result;
  }, "");
}

function shippingFee(itemTotal) {
  if (itemTotal === 0) {
    return 0;
  } else if (itemTotal < 2000) {
    return 500;
  } else if (2000 <= itemTotal && itemTotal < 3000) {
    return 250;
  } else if (itemTotal >= 3000) {
    return 0;
  }
}

function itemsInCartMessage() {
  return itemLines() + "\n" + `小計: ${itemTotal()}円`;
}

function calc() {
  const _itemLines = itemLines();
  const _itemTotal = itemTotal();
  const _shippingFee = shippingFee(_itemTotal);

  window.alert(
    _itemLines +
      "\n" +
      `送料: ${_shippingFee}円` +
      "\n" +
      `合計金額: ${_itemTotal + _shippingFee}円`
  );
}
