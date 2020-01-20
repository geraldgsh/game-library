# Odin Project Title - Game Library 

### Introduction.

https://www.theodinproject.com/courses/javascript/lessons/library

### Project Setup

1. Set up project with skeleton HTML/CSS and JS files.

2. Book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input. 

```javascript
let myLibrary = [];
```

Store the new book objects into an array.

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

3. Hook the array up to your HTML with a render() function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

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
- The new Game() operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. The new keyword does the following things:

a. Creates a blank, plain JavaScript object (i.e. title, publisher, platform, etc);
b. Links (sets the constructor of) this object to another object;
c. Passes the newly created object from Step 1 as the this context;
d. Returns this if the function doesn't return its own object.

Source [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

- The push() method adds one or more elements to the end of an array and returns the new length of the array.

Source [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- Update local Storage(browser memory) after new object has been created.

- Clear form for new entries

- Close popup form

- The Element property innerHTML gets or sets the HTML or XML markup contained within the element.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).

- Display newly created object on front end.

- Console "added" message to confirm new entry.

- The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

Source [here](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem).

```javascript
const table = document.getElementById("library_catalog");
const secondTable = document.getElementById("lib_content");
```

- The Document method getElementById("library_catalog") & getElementById("lib_content") returns an Element object representing the element whose id (i.e. <div id="lib_content"></div>) property matches the specified string.

````javascript
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



4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

```javascript
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addGameToLibrary);
});
```

- Calls "addGameToLibrary" function when button is pushed on front-end.

```javascript

```

Game Library
This is a small App for libraries built with Bulma, JS, CSS & HTML.

screenshot

Additional description about the project and its features.

Built With:
* Bulma

Live Demo
(Click here)[]

Getting Started
This is an example of how you may give instructions on setting up your project locally. Modify this file to match your project, remove sections that don't apply. For example: delete the testing section if the currect project doesn't require testing.

To get a local copy up and running follow these simple example steps.

Prerequisites
Setup
Install
Usage
Run tests
Deployment

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