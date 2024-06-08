function handleDislike() {
    var container = document.getElementById("container");
    var firstDress = container.firstElementChild;

    // Move the first dress to the left and remove it after the transition
    firstDress.style.transition = "left 0.5s ease-in-out";
    firstDress.style.left = "-100%";

    setTimeout(function() {
        container.removeChild(firstDress);
    }, 500);
}

function handleLike() {
    var container = document.getElementById("container");
    var lastDress = container.lastElementChild;

    // Move the last dress to the right and remove it after the transition
    lastDress.style.transition = "left 0.5s ease-in-out";
    lastDress.style.left = "100%";

    setTimeout(function() {
        container.removeChild(lastDress);
    }, 500);
}
