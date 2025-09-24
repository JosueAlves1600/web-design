document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensagemSucesso").classList.remove("hidden");
  this.reset();
});
