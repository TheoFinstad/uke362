let randomNumbersArray = [];

function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
        alert('Vennligst oppgi gyldige tallverdier der minimum er mindre enn maksimum.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    randomNumbersArray.push(randomNumber);

    updateDOM(randomNumber);
}

function updateDOM(randomNumber) {
    const randomNumbersDiv = document.getElementById('randomNumbers');

    const p = document.createElement('p');
    p.textContent = `Tilfeldig tall: ${randomNumber}`;

    randomNumbersDiv.appendChild(p);
}
