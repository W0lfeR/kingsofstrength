const navBarToggle = () => {
    document.getElementById("header-trigger").addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.getElementById("navclick");
        element.classList.toggle("open");
        const secElement = document.getElementById("header-trigger");
        secElement.classList.toggle("open");
    });
}
navBarToggle();

