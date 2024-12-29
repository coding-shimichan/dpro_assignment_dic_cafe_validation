function onLoad() {
  const form = document.getElementsByTagName("form")[0];
  form
    .querySelector("#email_confirm")
    .addEventListener("input", emailValidation);
  form.addEventListener("submit", showConfirmationMessage);

  function showConfirmationMessage(e) {
    e.preventDefault();

    const name = form.name.value;
    const confirmationMessage = `${name}さん、本当に送信しますか？`;
    const confirmationResult = window.confirm(confirmationMessage);

    if (confirmationResult === false) {
      window.alert("キャンセルしました");
      e.preventDefault();
    } else {
      form.submit();
    }
  }

  function emailValidation(e) {
    const form = e.target.closest("form");
    const email = form.email.value;
    const email_confirm = form.email_confirm.value;
    const table = e.target.closest("table");

    if (email !== email_confirm) {
      if (!table.querySelector(".alert")) {
        const newRow = table.insertRow(3);
        newRow.classList.add("alert");
        const newCell = newRow.insertCell(0);
        const newText = document.createTextNode("Eメールが一致しません");
        newCell.appendChild(newText);

        e.target.classList.toggle("invalid_input");
      }

      form.querySelector(".submit_btn").disabled = true;
    } else {
      table.querySelector(".alert")?.remove();
      e.target.classList.remove("invalid_input");
      form.querySelector(".submit_btn").disabled = false;
    }
  }
}

window.onload = onLoad;
