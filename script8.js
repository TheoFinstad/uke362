function generateColorList() {
    const input = document.getElementById('colorInput').value.trim();

    if (input === "") {
        alert("Vennligst skriv inn noen farger.");
        return;
    }

    const colorsArray = input.split(',').map(color => color.trim());

    updateDOM(colorsArray);
}

function updateDOM(colorsArray) {
    const colorList = document.getElementById('colorList');

    colorList.innerHTML = '';

    colorsArray.forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        li.style.backgroundColor = color;
        li.style.color = color === 'hvit' || color === 'white' ? 'black' : 'white';

        li.onclick = function() {
            document.body.style.backgroundColor = color;
        };

        colorList.appendChild(li);
    });
}
