"use strict";

(function () {
  const text = document.getElementsByTagName("h3");
  text.style.color = "red";

  document.getElementById("btn-hold").addEventListener("click", function () {
    text.style.color = "yellow";
  });
})();
