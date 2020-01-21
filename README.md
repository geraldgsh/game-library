# Odin Project Title - Game Library 

### Introduction.

https://www.theodinproject.com/courses/javascript/lessons/library
<br>

### Screenshot

![image](/img/screenshot.JPG "screenshot")
<br>

### Project Setup

1. Set up project with skeleton HTML/CSS and JS files.
<br>

### Constructor

2. Game objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input. 

```javascript
let myLibrary = [];
```

Store the new game objects into an array.

```javascript
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
```
<br>

#### Object Constructors

Define specific type of object that you need to duplicate (i.e. title, author, year, etc) better way to create them is using an object constructor, which is a function that looks like above. 

**note: "played" object will have property of "Played" or "Not-Played".

```javascript
var newGame = new Game(title, publisher, platform, genre, year, played);
```

and which we use by calling the function with the keyword new.

```javascript
function addGameToLibrary() {
  // do stuff here
}
```
<br>

### render()

3. Hook the array up to your HTML with a render() function that loops through the array and displays each game on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few games to your array so you can see the display.

```javascript
const addGameToLibrary = (ev)=> {
  ev.preventDefault();  //to stop blank form submission
  var title = document.getElementById('title').value;
  var publisher = document.getElementById('publisher').value;
  var platform = document.getElementById('platform').value;
  var genre = document.getElementById('genre').value;
  var year = document.getElementById('year').value;
  let played = document.getElementById('played?').checked = true;
  .
  .
  .
}
```
The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element on your document.

Returns null if no elements with the specified ID exists.

An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the first element in the source code.

Sources [here](https://www.w3schools.com/jsref/met_document_getelementbyid.asp) and [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById).

```javascript
const addGameToLibrary = (ev)=> {
.
.
.
  var newGame = new Game(title, publisher, platform, genre, year, played);
  myLibrary.push(newGame);
  updateLocalStorage(myLibrary);
  document.forms[0].reset(); // to clear the form for the next entries
  closeForm();
  secondTable.innerHTML="";  
  render(); //for display purposes only
  console.warn('added' , {myLibrary} );  
  localStorage.setItem('library', JSON.stringify(myLibrary)); //saving to localStorage
}
```
+ The new Game() operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The new keyword does the following things:

a. Creates a blank, plain JavaScript object (i.e. title, publisher, platform, etc);
b. Links (sets the constructor of) this object to another object;
c. Passes the newly created object from Step 1 as the this context;
d. Returns this if the function doesn't return its own object.

Source [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

+ The push() method adds one or more elements to the end of an array and returns the new length of the array.

Source [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

+ Update local Storage(browser memory) after new object has been created.

+ Clear form for new entries

+ Close popup form

+ The Element property innerHTML gets or sets the HTML or XML markup contained within the element.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

+ Display newly created object on front end.

+ Console "added" message to confirm new entry.

+ The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).

```javascript
const table = document.getElementById("library_catalog");
const secondTable = document.getElementById("lib_content");
```

+ The Document method getElementById("library_catalog") & getElementById("lib_content") returns an Element object representing the element whose id (i.e. <div id="lib_content"></div>) property matches the specified string.

```javascript
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
      .
      .
}
```

+ The Element property secondTable.innerHTML gets (from secondTable & table) or sets the HTML or XML markup contained within the element.

+ Element.setAttribute() sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).

+ The "secondTable.insertRow()" method inserts a new row (<tr>) in a given "<table>", and returns a reference to the new row.

+ Every innerHTML displays properties for myLibrary array (i.e. title, platform, year etc).
<br>

### “NEW GAME” button

4. Add a “NEW GAME” button that brings up a form allowing users to input the details for the new game: author, title, number of pages, whether it’s been read and anything else you might want.

```html
<div class="open-btn">
  <button class="button is-primary" onclick="openForm()"><strong>New Game</strong></button>
</div>
```

+ "onclick" in HTML tag calls open form function in javascript.

```javascript
function openForm() {
  document.getElementById("popupForm").style.display="block";
}
```

+ Openform function opens a form below that lays dormant.

```html
<div class="form-popup" id="popupForm">
  <form class="form-container">
    <h4 class="title is-4">Please add a game</h2>
    <label for="title"><strong>Title</strong></label>
    <input type="text" name="title" id="title" placeholder="Title" required>

    <label for="publisher"><strong>Publisher</strong></label>
    <input type="text" name="publisher" id="publisher" placeholder="publisher" required>

    <div class="formBox">
      <label for="platform"><strong>Platform</strong></label>
      <input type="text" name="platform" id="platform" placeholder="Platform" required>
    </div>

    <div class="formBox">
      <label for="year"><strong>Release Year</strong></label>
      <input type="number" name="year" id="year" placeholder="Year Released" required>
    </div>
    
    <div class="formBox">    
      <label for="genre"><strong>Genre</strong></label>
      <select name="genre" id="genre" required>
        <option value="action">Action</option>
        <option value="adventure">Adventure</option>
        <option value="RPG">RPG</option>
        <option value="FPS">FPS</option>
        <option value="MMO">MMO</option>
        <option value="MMORPG">MMORPG</option>
        <option value="MOBA">MOBA</option>
        <option value="puzzle">Puzzle</option>
        <option value="horror">Horror</option>
        <option value="combat">Combat</option>
      </select>
    </div>

    <div class="formBox">
      <div class="form-check">
        <label for="played?">Not Played?</label>
        <input id="played?" type="checkbox" name="Played?">
      </div>
    </div>

    <button type="submit" id="btn" class="btn">Click to Add</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
  </form>
</div>
</div>
```

+ Form consist of objects with buttons to close the form and submit to call function as illustrated below.

```javascript
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addGameToLibrary);
});
```

+ Calls "addGameToLibrary" function when button is pushed on "popupForm" HTML block.
<br>

### Remove

5. Add a button on each game’s display to remove the game from the library. You will need to associate your DOM elements with the actual game objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

```javascript
function render() {
  .
  .
  cell7.innerHTML = `<button class="button is-danger">Delete</button>`;
  cell7.id = "remove";
  .
  .
}
```

+ Add remove ID to button on frontend. Then creates "remove" function below.

```javascript
function render() {
  .
  .
  let allremoveButton  = document.querySelectorAll("#remove");
    for (const button of allremoveButton) {
        button.addEventListener('click', remove);
    }
  .
  .
} 
```

+ The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

In this case, to remove an entry with function below.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```javascript
function remove() {
  myLibrary.splice(Number(this.parentNode.dataset.index),1);
  updateLocalStorage(myLibrary);
  render();
}
```

+ Removes table entry, update local storage and render it once more to reflex changes.
<br>

### Status

6. Add a button on each game’s display to change its read status.
To facilitate this you will want to create the function that toggles a game’s read status on your Game prototype instance.

```javascript
function render() {
  .
  .
  cell6.innerHTML = `<button class="button is-primary">${myLibrary[i].played}</button>`;
  cell6.id = "toggle";
  .
  .
}
```

+ Render a button to call "toggle" below;

```javascript
function render() {
  .
  .
  let allremoveButton  = document.querySelectorAll("#remove");
  for (const button of allremoveButton) {
      button.addEventListener('click', remove);
  }
  .
  .
}
```

+ An event listen to call toggle function below.

```javascript
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
```

+ "toggle" function evaluates current status and change to its inverse when function is called when button is clicked. Status changes are updated to local storage then rendered.
<br>

#### Game Library
This is a small App for libraries built with Bulma, JS, CSS & HTML.

Built With:
* Bulma

##### Live Demo
(Click here)[https://geraldgsh.github.io/game-library/]

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/library

### Github Repo
https://github.com/geraldgsh/game-library

## Author

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh).

Twitter: [geraldgsh](https://github.com/geraldgsh).

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/game-library/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.