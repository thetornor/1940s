window.onscroll = function () {
    scrollRotate();
};
function scrollRotate() {
    let image = document.getElementById("rotate1");
    image.style.transform = "rotate(" + window.pageYOffset/6 + "deg)";
}
