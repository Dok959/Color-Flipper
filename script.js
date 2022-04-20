function change() {
    let color = '#';

    while (color.length < 7) {
        let liter = Math.floor(Math.random() * 16);
        liter = liter.toString(16);
        color += liter;
    }

    document.body.style.backgroundColor = color;

    document.getElementsByClassName('text-color')[0].textContent =
        color.toUpperCase();
}
