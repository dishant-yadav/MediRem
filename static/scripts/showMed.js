let prev = document.getElementById("prev");
let next = document.getElementById("next");
let tod = document.getElementById("tod");
let todList = document.getElementById("tod-list");
let tom = document.getElementById("tom");
let tomList = document.getElementById("tom-list");
let tweek = document.getElementById("tweek");

tod.addEventListener("click", function () {
    todList.style.display = "block";
    tomList.style.display = "none";
})

tom.addEventListener("click", function () {
  tomList.style.display = "block";
  todList.style.display = "none";
});
// let noOfMed = document.getElementsByClassName("f");
// if (noOfMed.length > 3) {
//     noOfMed.forEach(element => {
//         noOfMed[2].style.display = "none";
//     });
//   prev.style.display = "block";
//   next.style.display = "block";
// }
// noOfMed[2].getElementsByClassName.display = "none";