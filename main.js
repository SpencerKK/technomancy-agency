var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("nav-btn");
var modalCloseBtn = document.getElementsByClassName("close")[0];

modalBtn.onclick = function () {
   modal.style.display = "block";
};

modalCloseBtn.onclick = function () {
   modal.style.display = "none";
};

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
};
