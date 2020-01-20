var myLibrary = [];

function Game(title, publisher, platform, genre, year, played) {
  this.title = title;
  this.publisher = publisher;
  this.platform = platform;
  this.genre = genre;
  this.year = year;
  if(played == false)  {
    this.played = "Not-Played";
  } else {
    this.played = "Played";
  }
}

const addGameToLibrary = (ev)=> {
  ev.preventDefault();  //to stop blank form submission
  var title = document.getElementById('title').value;
  var publisher = document.getElementById('publisher').value;
  var platform = document.getElementById('platform').value;
  var genre = document.getElementById('genre').value;
  var year = document.getElementById('year').value;
  let played = document.getElementById('played?').checked = true;
  var newGame = new Game(title, publisher, platform, genre, year, played);
  myLibrary.push(newGame);
  updateLocalStorage(myLibrary);
  document.forms[0].reset(); // to clear the form for the next entries
  closeForm();
  secondTable.innerHTML="";

  //for display purposes only
  render();
  console.warn('added' , {myLibrary} );
  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2);

  //saving to localStorage
  localStorage.setItem('library', JSON.stringify(myLibrary) );
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addGameToLibrary);
});

const table = document.getElementById("library_catalog");
const secondTable = document.getElementById("lib_content");

function render() {
  secondTable.innerHTML="";
  for(let i = myLibrary.length-1; i >= 0; i--){
      let row = secondTable.insertRow(0);
      row.setAttribute("data-index", `${i}`);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);

      cell1.innerHTML = myLibrary[i].title;
      cell2.innerHTML = myLibrary[i].platform;
      cell3.innerHTML = myLibrary[i].publisher;
      cell4.innerHTML = myLibrary[i].year;
      cell5.innerHTML = myLibrary[i].genre;
      cell6.innerHTML = `<button class="button is-primary">${myLibrary[i].played}</button>`;
      cell6.id = "toggle"; //to toggle played and not played.
      // cell5.innerHTML = i + 1;
      cell7.innerHTML = `<button class="button is-danger">Delete</button>`;
      cell7.id = "remove";//add remove id to select it if you want to remove the game.      
  }
  let allremoveButton  = document.querySelectorAll("#remove");
  for (const button of allremoveButton) {
      button.addEventListener('click', remove);
  }
  let allToggle = document.querySelectorAll("#toggle");
  for( const toggles of allToggle){
      toggles.addEventListener('click', toggle)
  }
  // if (storageAvailable('localStorage')) {
  //   localStorage.setObj("library", myLibrary);
  //   console.log(localStorage);    
  // }
}

function toggle(e) {
  if (e.target.classList.contains('not-played')) {
      e.target.classList.remove('not-played');
      e.target.textContent = "Played";
      myLibrary[Number(e.target.id)].played = 'played';
      // change object property to true
  } else {
      e.target.classList.add('not-played');
      e.target.textContent = "Not Played";
      myLibrary[Number(e.target.id)].played = 'not-played';
      // change object property to false
  }
  updateLocalStorage(myLibrary);
}

function remove() {
  myLibrary.splice(Number(this.parentNode.dataset.index),1);
  updateLocalStorage(myLibrary);
  render();
}

myLibrary.forEach((game) => { Object.setPrototypeOf(game, Game.prototype); });
function updateLocalStorage() {
  window.localStorage.setItem('library', JSON.stringify(myLibrary))
}

function openForm() {
  document.getElementById("popupForm").style.display="block";
}

function closeForm() {
  document.getElementById("popupForm").style.display="none";
}
