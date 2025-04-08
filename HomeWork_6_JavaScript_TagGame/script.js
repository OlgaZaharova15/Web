const board = document.getElementById("board");
const shuffleButton = document.getElementById("shuffle");
let tiles = []; // Создаем массив плиток
for (let i = 1; i <= 15; i++) {
    tiles.push(i);
}
tiles.push(null); // Добавляем пустую плитку

function createBoard() {
    board.innerHTML = ''; // Очищаем доску
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement("div");
        tileElement.classList.add("tile");
        if (tile !== null) {
            tileElement.textContent = tile;
            tileElement.addEventListener("click", () => moveTile(index));
        } else {
            tileElement.classList.add("empty");
        }
        board.appendChild(tileElement);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4];

    if (validMoves.includes(index)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]]; // Меняем местами
        createBoard();
        checkWin();
    }
}

function checkWin() {
    if (tiles.slice(0, 15).every((tile, index) => tile === index + 1)) {
        setTimeout(() => alert('Поздравляем! Вы выиграли!'), 100);
    }
}

function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    createBoard();
}

shuffleButton.addEventListener("click", shuffleTiles);
createBoard();
