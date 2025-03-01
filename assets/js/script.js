document.getElementById('magicButton').addEventListener('click', function() {
    const button = this;
    button.disabled = true;

    for (let i = 0; i < 50; i++) {
        createCircle(button);
    }

    setTimeout(() => {
        button.disabled = false; 
    }, 1000);
});

function createCircle(button) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    const buttonRect = button.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.style.left = `${endX}px`;
        circle.style.top = `${endY}px`;
    }, 10);

    setTimeout(() => {
        circle.remove();
    }, 1000);
}