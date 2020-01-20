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
function Book(title, numPages, author, genre, year, read) {
  this.title = title;
  this.numPages = numPages;
  this.author = author;
  this.genre = genre;
  this.year = year;
  if(read){
    this.read = "Read";
  } else {
    this.read = "Unread";
  }
}
```

#### Object Constructors

Define specific type of object that you need to duplicate (i.e. title, author, year, etc) better way to create them is using an object constructor, which is a function that looks like above. 

**note: "read" object will have property of "read" or "unread".

```javascript
var newBook = new Book(title, numPages, author, genre, year, read)
```

and which we use by calling the function with the keyword new.

```javascript
function addBookToLibrary() {
  // do stuff here
}
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