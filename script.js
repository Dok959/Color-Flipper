function change() {
    let color = '';

    while (color.length < 6) {
        let liter = Math.floor(Math.random() * 16);
        liter = liter.toString(16);
        color += liter;
    }

    document
        .getElementsByTagName('body')[0]
        .setAttribute('style', `background: #${color}`);

    document.getElementsByClassName('text-color')[0].textContent =
        color.toUpperCase();
}
