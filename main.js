var CodeYourFuture = document.querySelector(".codeYourFuture");
function myFunction() {
  var CodeYourFuture = document.querySelector("#CodeYourFuture");
  if (CodeYourFuture.style.display === "none") {
    CodeYourFuture.style.display = "block";
  } else {
    CodeYourFuture.style.display = "none";
  }
}

$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});
