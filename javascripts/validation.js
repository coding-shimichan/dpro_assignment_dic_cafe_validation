function onLoad() {
  const form = document.getElementsByTagName("form")[0];
  form.onsubmit = showConfirmationMessage;

  function showConfirmationMessage(e) {
    if (emailValidation() === false) {
      const errorMessage = document.createElement("p");
      errorMessage.innerText = "メールアドレスが一致しません";
      errorMessage.classList.add("alert");
      form.appendChild(errorMessage);
      return false;
    }

    const name = form.name.value;
    const confirmationMessage = `${name}さん、本当に送信しますか？`;
    const confirmationResult = window.confirm(confirmationMessage);

    if (confirmationResult === false) {
      window.alert("キャンセルしました");
      return false;
    }

    function emailValidation() {
      const email = form.email.value;
      const email_confirm = form.email_confirm.value;

      if (email !== email_confirm) {
        return false;
      }
    }
  }
}

window.onload = onLoad;
