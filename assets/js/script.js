
function pintar(ele1, color = 'green') {
    ele1.style.backgroundColor = color;
}

const ele2 = document.getElementById("ele1");
pintar(ele2);


ele2.addEventListener("click", function() {
    pintar(ele2, 'yellow');
});