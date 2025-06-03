
const buttons = document.getElementsByClassName('button');
for (let button of buttons) {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        button.style.setProperty('--rotateX', `${rotateX}deg`);
        button.style.setProperty('--rotateY', `${rotateY}deg`);
    });
    button.addEventListener('mouseleave', () => {
        button.style.setProperty('--rotateX', '0deg');
        button.style.setProperty('--rotateY', '0deg');
    });
}

