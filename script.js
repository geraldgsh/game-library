/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
const myLibrary = [];
function Game(title, publisher, platform, genre, year, played) {
  this.title = title;
  this.publisher = publisher;
  this.platform = platform;
  this.genre = genre;
  this.year = year;
  this.played = played;
}

Game.prototype = {
  constructor: Game,
  updateRead() {
    if (this.played === 'Played') {
      this.played = 'Not-Played';
    } else {
      this.played = 'Played';
    }
  },
};

// myLibrary.forEach((game) => { Object.setPrototypeOf(game, Game.prototype); });
function updateLocalStorage(arr) {
  window.localStorage.setItem('library', JSON.stringify(arr));
}

const addGameToLibrary = () => {
  // to stop blank form submission
  const title = document.getElementById('title').value;
  const publisher = document.getElementById('publisher').value;
  const platform = document.getElementById('platform').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;
  // eslint-disable-next-line no-multi-assign
  const plays = document.getElementById('status').value;
  const newGame = new Game(title, publisher, platform, genre, year, plays);
  myLibrary.push(newGame);
  updateLocalStorage(myLibrary);
  document.forms[0].reset(); // to clear the form for the next entries
  closeForm();
  secondTable.innerHTML = '';
  // for display purposes only
  render();
  // eslint-disable-next-line no-console
  console.warn('added', { myLibrary });
  // saving to localStorage
  window.localStorage.setItem('library', JSON.stringify(myLibrary));
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addGameToLibrary);
});

// eslint-disable-next-line no-unused-vars
const table = document.getElementById('library_catalog');
const secondTable = document.getElementById('lib_content');

function render() {
  secondTable.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  myLibrary.forEach((game, index) => {
    const row = secondTable.insertRow(0);
    row.setAttribute('data-index', `${index}`);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    cell1.innerHTML = game.title;
    cell2.innerHTML = game.platform;
    cell3.innerHTML = game.publisher;
    cell4.innerHTML = game.year;
    cell5.innerHTML = game.genre;
    cell6.innerHTML = `<button class='button is-primary'>${game.played}</button>`;
    // to toggle played and not played.
    cell6.id = 'toggle';
    // eslint-disable-next-line quotes
    cell7.innerHTML = `<button class='button is-danger'>Delete</button>`;
    // add remove id to select it if you want to remove the game.
    cell7.id = 'remove';
  });
  const allremoveButton = document.querySelectorAll('#remove');
  // eslint-disable-next-line no-restricted-syntax
  for (const button of allremoveButton) {
    button.addEventListener('click', remove);
  }
  const allToggle = document.querySelectorAll('#toggle');
  // eslint-disable-next-line no-restricted-syntax
  for (const toggles of allToggle) {
    toggles.addEventListener('click', toggle);
  }
}

function toggle(e) {
  myLibrary[this.parentNode.dataset.index].updateRead();
  updateLocalStorage(myLibrary);
  if (myLibrary[this.parentNode.dataset.index].played === 'Played') {
    e.target.classList.remove('Not-Played');
    e.target.textContent = 'Played';
    // myLibrary[Number(e.target.id)].played = 'Played';
    // change object property to true
  } else {
    e.target.classList.add('Not-Played');
    e.target.textContent = 'Not-Played';
    // myLibrary[this.parentNode.dataset.index].played = 'Not-Played';
    // change object property to false
  }
}

function remove() {
  myLibrary.splice(Number(this.parentNode.dataset.index), 1);
  updateLocalStorage(myLibrary);
  render();
}


myLibrary.push(new Game('Silent Hill', 'Konami', 'Playstation', 'Horror', 1999, 'Played'));
myLibrary.push(new Game('Mario Kart', 'Nintendo', 'Nintendo', 'Action', 1992, 'Played'));
updateLocalStorage(myLibrary);
render();

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById('popupForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}
