let fruits = [];

function addFruit() {
    const fruitInput = document.getElementById('fruitInput');
    const fruitName = fruitInput.value.trim();

    if (fruitName) {
        fruits.push(fruitName);

        updateFruitList();

        fruitInput.value = '';
    }
}

function updateFruitList() {
    const fruitList = document.getElementById('fruitList');

    fruitList.innerHTML = '';

    fruits.forEach((fruit, index) => {
        const li = document.createElement('li');
        li.textContent = fruit;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Slett';
        deleteButton.onclick = function() {
            deleteFruit(index);
        };

        li.appendChild(deleteButton);

        fruitList.appendChild(li);
    });
}

function deleteFruit(index) {
    fruits.splice(index, 1);

    updateFruitList();
}
