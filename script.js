const light = document.getElementById('light');
const text = document.getElementById('text');
const toggleButton = document.getElementById('toggleButton');

let isOn = false;

toggleButton.addEventListener('click', () => {
    if (isOn) {
        light.classList.remove('light-on');
        light.classList.add('light-off');
        text.textContent = 'Click me!';
        text.style.color = 'black';
    } else {
        light.classList.remove('light-off');
        light.classList.add('light-on');
        text.textContent = 'You did it!';
        text.style.color = 'white';
    }
    isOn = !isOn;
});