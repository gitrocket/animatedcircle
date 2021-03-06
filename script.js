const button = document.querySelector('.circle-btn');

button.addEventListener('click', function(e) {
    // find x and y values of click location
    const x = e.clientX
    const y = e.clientY;

    // find location of top and left of target relative to the viewport
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // find click locatioin relative to target location
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('animated-circle');
    circle.style.top = yInside + "px"
    circle.style.left = xInside + "px"

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500)



});