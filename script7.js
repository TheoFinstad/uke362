function countOccurrences() {
    const input = document.getElementById('itemInput').value.trim();

    if (input === "") {
        alert("Vennligst skriv inn noen elementer.");
        return;
    }

    const itemsArray = input.split(',').map(item => item.trim());

    const occurrences = {};

    itemsArray.forEach(item => {
        occurrences[item] = (occurrences[item] || 0) + 1;
    });

    updateDOM(occurrences);
}

function updateDOM(occurrences) {
    const resultList = document.getElementById('resultList');

    resultList.innerHTML = '';

    for (const item in occurrences) {
        const li = document.createElement('li');
        li.textContent = `${item}: ${occurrences[item]} ganger`;
        resultList.appendChild(li);
    }
}
