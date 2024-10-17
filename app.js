let list = document.querySelectorAll(".shopping-list li");
function changeColor(list){
    list.target.style.color = "grey";
}
list.forEach((a) => {
    a.addEventListener("click", changeColor);
})