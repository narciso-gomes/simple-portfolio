function copyPhoneToClipboard(phoneNumber) {
  Toastify({
    text: "✅ Número de telefone copiado.",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
  }).showToast();
}
