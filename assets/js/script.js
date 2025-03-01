document.getElementById('magicButton').addEventListener('click', function () {
    const button = this;
    button.disabled = true; 




    document.body.style.backgroundColor = getRandomColor();

    button.style.boxShadow = `0 0 30px ${getRandomColor()}`;


    for (let i = 0; i < 50; i++) {
        createCircle(button);
        createFloatingText(button, messages[Math.floor(Math.random() * messages.length)]);
    }

    setTimeout(() => {
        button.disabled = false;
        button.style.boxShadow = '0 0 10px rgba(97, 218, 251, 0.5)'; // Volta à sombra original
    }, 2000);
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

function createFloatingText(button, text) {
    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-text');
    floatingText.textContent = text;

    const buttonRect = button.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;

    floatingText.style.left = `${x}px`;
    floatingText.style.top = `${y}px`;

    document.body.appendChild(floatingText);

    setTimeout(() => {
        floatingText.remove();
    }, 2000);
}

function getRandomColor() {
    const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1', '#955251', '#b565a7', '#009b77', '#dd4124', '#d65076'];
    return colors[Math.floor(Math.random() * colors.length)];
}