function calc() {
  const form = document.querySelector("form");
  const total = parseInt(form.product.value) * parseInt(form.quantity.value);
  console.info(`合計金額： ${total}円`);
}
