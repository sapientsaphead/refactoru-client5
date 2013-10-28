#### Group Exercise: [Rob](https://github.com/Devaio), [Rich](https://github.com/ralucas) and Deb

### Inspirational Quotes

#### Skills
* Modifying the DOM
* Sorting
* Data Validation
* CSS Architecture
* Local Storage


#### Resources
* [jQuery Documentation](http://api.jquery.com/)
* [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)


#### Background
In this exercise you will be writing your first comprehensive web application. You know how to manipulate the DOM with jQuery and you know how to respond to user events such as button clicks or key presses. With this you can create an interactive application.

This application is entirely client-side. That is, you are not saving or retrieving data from the server, so it is isolated to your machine and the quotes you add will not be saved if you refresh your page. You can simulate a database by utilizing LocalStorage, which is the task presented in Bonus I.

The requirements for this exercise are purposefully __underspecified__. This is the expected real-world scenario you have as a developer. Program specifications are often written by a product owner without developer knowledge. This is a good thing. This is where you shine, in __turning people's ideas into reality__, whether they are your own ideas or someone else's.

Take a few moments to design each feature before writing any code and don't hesitate to run it by your classmates or the instructors first before writing code.

#### Techniques
##### Generating DOM elements in JavaScript

You will learn better techniques for generating DOM elements in Bonus II but this is the most direct way for now:
```
// You have some Javascript data (primitive value, array, object, etc)
var numDocs = 10;

// Use jQuery to create a new DOM element.
var messageEl = $("<p>You have {0} documents.</p>".supplant([numDocs]));

// Add the DOM element to the page.
$("body").append(messageEl);
```

#### Requirements
1. Build a client-side web app that allow users to share inspirational quotes. You choose whether the app is broken up into multiple pages or exposes functionality through multiple components on a single page.
2. A user can add a new quote through a form. The form should ask for the quote and author, which are both required.
3. Display a list of all the quotes. This list should update in real-time when quotes are added, deleted, or rated.
4. User can click on the author of a quote to go to a separate page/sceeen that shows all quotes from that person.
5. Users can rate a quote 1-5 stars.
6. Quotes should be sorted by rating.
7. Make a 'Random Quote' button that selects a quote at random and displays it in a popup (not an alert).
8. User can delete a quote. The user should be given the option to undo their last action.

__Tip:__ How can you speed up debugging? If you are manually adding quotes every time you have to test a feature, maybe there is a way to prepopulate the quotes for testing purposes?

#### Bonus I: Local Storage

Simulate a persistant database by saving users quotes to LocalStorage and retrieving them on page load.

#### Bonus II: Client-Side Templating

Generating HTML dynamically can be a messy affair: concatenating strings of angled brackets somewhere in the middle of your jQuery code. Yuk! Improve the ease, readability, and maintainability of your code by leveraging one of the following client-side templating languages:

* [Creatable](http://metaraine.github.io/creatable/) (Interactive Creatable-to-HTML Converter: [TryCreatable](http://oo7ph.github.io/TryCreatable/))
* [Handlebars](http://handlebarsjs.com/)
