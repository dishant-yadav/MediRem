let form1 = document.getElementById("b-details");
let form2 = document.getElementById("s-links");
let form3 = document.getElementById("p-details");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");

let progress = document.getElementById("progress");

next1.addEventListener("click", function () {
  form1.style.display = "none";
  form2.style.display = "block";
  progress.style.width = "24rem";
});

back1.addEventListener("click", function () {
  form1.style.display = "block";
  form2.style.display = "none";
  progress.style.width = "12rem";
});

next2.addEventListener("click", function () {
  form2.style.display = "none";
    form3.style.display = "block";
    progress.style.width = "36rem";
});

back2.addEventListener("click", function () {
  form2.style.display = "block";
    form3.style.display = "none";
    progress.style.width = "24rem";
});
