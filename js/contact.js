function showProcedureOptions() {
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("procedure-options").style.display = "block";
}

function showSelectedProcedure() {
  var selectedProcedure = document.querySelector('input[name="procedure"]:checked').value;
  document.getElementById("procedure-options").style.display = "none";
}

function showContactForm() {
  document.getElementById("procedure-options").style.display = "none";
  document.getElementById("contact-form").style.display = "block";
}