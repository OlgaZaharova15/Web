const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restartBtn');
var currentPlayer = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
var isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkForWinner();
}

function checkForWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Игрок ${currentPlayer} выиграл!`);
            isGameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        alert('Ничья!');
        isGameActive = false;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartBtn.addEventListener('click', restartGame);

