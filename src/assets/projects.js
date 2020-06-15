import weatherAppImg from "./media/weather.png";
import calculatorAppImg from "./media/calculator.png"
import todoAppImg from "./media/todolist.png"
import newsweekImg from "./media/newsweek.png"
import etchasketchImg from "./media/etchasketch.png"
import googleHomepageImg from "./media/googlehomepage.png"
import libraryPageImg from "./media/librarypage.png"
import newyorktimesImg from "./media/newyorktimes.png"
import portfolioImg from "./media/portfolio.png"
import restaurantImg from "./media/restaurant.png"
import tnwImg from "./media/tnw.png"
import tictactoeImg from "./media/tictactoe.png"
import rpsImg from "./media/rockpaperscissors.png"



const projects = [
    {
      title: 'Weather App',
      shortDescription: 'A simple weather app that utilises Javascript to retrieve and manipulate data from the OpenWeatherMap API.',
      longDescription: '<p>This app makes use of the Async & Await functions to grab data from the OpenWeatherMap API. </p><p>It works by collecting a country or city entered into the input section that is stored in the state of the SearchBar component. This location is then passed as a parameter to the getWeather() function responsible for handling the asynchronous code. </p> <p> getWeather() is an async function that fetches data from the aforementioned API, transfers its response to JSON, and then passes that data to the processWeather() function. processWeather is responsible for selecting the required properties from the JSON and storing the chosen data in the App components state. The selected data in this case is the location: country, city, temperature, description, weather icon etc… </p> <p>Once the App’s currentForecast state has been updated with this object of refined data, this data is then rendered to the screen. </p> <p>Voila!</p> <p>This app is predominantly styled with Materialise.</p>',
      tools: 'HTML & CSS, Javascript, React, Async / Await, Materialise',
      tags: ['javascript', 'react'],
      image: weatherAppImg,
      url: 'https://joshbjorn.github.io/weather-app ',
      github: 'https://github.com/joshbjorn/weather-app/tree/master',
      year: "2020"
    },
    {
      title: 'Newsweek Clone',
      shortDescription: 'A fully responsive, bootstrapped, clone of Newsweek’s homepage.',
      longDescription: '<p>My final clone, I promise. </p><p>This one was built with the intention to better understand the bootstrap library, quite specifically, it’s amazing grid system. This project is absolutely littered with bootstrap classes, so I’m sorry, I couldn’t help myself whilst giving this a go. </p><p>Again, this one is fully responsive (thank god) and built mobile first. </p>',
      tools: 'HTML & CSS, Bootstrap',
      tags: ['htmlCss', 'bootstrap', 'responsive'],
      image: newsweekImg,
      url: 'https://joshbjorn.github.io/newsweek-clone',
      github: 'https://github.com/joshbjorn/newsweek-clone',
      year: "2020"
    },
    {
      title: 'Library',
      shortDescription: 'A Library app that takes a look at objects and class constructors.',
      longDescription: '<p>This library app is a project that focuses on the process of storing data in objects and constructing new objects with class constructors. </p><p>Here, once the ’Add Book’ form fields are filled in and submitted a new book object is created using the corresponding form fields as the parameter values for the Book class constructor. That book is then pushed to the myLibrary array, which is then looped through and rendered as a table on the screen. </p><p>You can also mark the book as read or not read after having added the book, which updates the object in myLibrary array, and delete the book if you wish to. </p><p>myLibrary is logged to the console when a book is added or deleted so you can check that their actually being added/removed. </p>',
      tools: 'HTML & CSS, Javascript, OOP',
      image: libraryPageImg,
      tags: ['javascript'],
      url: 'https://joshbjorn.github.io/library',
      github: 'https://github.com/joshbjorn/library', 
      year: "2019"
    },
    {
      title: 'Tic Tac Toe',
      shortDescription: 'A tic tac toe game built to incorporate intermediate Javascript concepts such as factory functions, modules, IIFE’s and closure.',
      longDescription:'<p>Okay, now on to the real stuff (sort of). This game separated into 3 modules: gameBoard, which  contains all the functionality of the board i.e checking to see if the game is won by a player, rendering/reseting the board etc. scoreboard that tracks the score and declares a winner. And buttons that triggers the events to get the game rolling.</p><p>The game begins with the play button that creates two new players from the Player() factory function, one representing naughts and the other, crosses. These new naughts and crosses objects have a name, setMarker and score property. Their assigned values are all used accordingly within the gameboard and scoreboard modules to track the flow of the game and determine a winner. </p>',
      tools: 'Javascript, Module Patterns, Factory Functions, OOP ',
      image: tictactoeImg,
      tags: ['javascript'],
      url: 'https://joshbjorn.github.io/tictactoe',
      github: 'https://github.com/joshbjorn/tictactoe',
      year: "2019"
    },
    {
      title: 'The Next Web Clone',
      shortDescription:'A fully responsive clone of the TNW’s homepage.',
      longDescription:'<p>Yep, another website clone. </p><p>This one focuses on media-queries and responsive design! I approached this one firstly by setting up a template of all the sections and then making them adjust accordingly when a certain break point was met. The next part of course, was to fill in the gaps. </p>',
      tools: 'HTML & CSS, Media Queries, Flex Box, Grid',
      image: tnwImg,
      tags: ['htmlCss', 'responsive'],
      url: 'https://joshbjorn.github.io/the-next-web-clone',
      github: 'https://github.com/joshbjorn/the-next-web-clone',
      year: "2020"
    },
    {
      title: 'Restaurant page',
      shortDescription: 'A mock restaurant website built mostly with Javascript and minimal HTML for the purpose of exploring Webpack and it’s modular JS capabilities. ',
      longDescription: '<p>This restaurant page was built intentionally with minimal HTML code for two reasons. The first being to become more familiar with Webpack’s modular Javascript capabilities. The second, to get a full-on DOM manipulation work-out. </p><p>Unfortunately, it was built for the desktop only and isn’t the prettiest of creations. So if you’re viewing this on smaller screens - I’m sorry! I have plenty of other cool responsive projects in this portfolio. </p><p>The point here was mainly to tackle building a project split into components and render them to the screen using Javascript. </p>',
      tools: 'HTML & CSS, Javascript, Webpack',
      image: restaurantImg,
      tags: ['javascript'],
      url: 'https://joshbjorn.github.io/restaurant-page/',
      github: 'https://github.com/joshbjorn/restaurant-page',
      year: "2019"
    },
    {
      title: 'Library (React)',
      shortDescription: 'An alternative library app built with React.',
      longDescription: '<p>A preliminary project built to develop an understanding of the fundamentals of React.</p><p>The app explores the use of storing and manipulating ‘state’, which in this case is an array containing the books and their corresponding data. The app also uses state to determine wether the AddBookForm component is showing or not. </p><p>As well as experimenting with state, it also makes effective use of React’s in built JSX event handlers - a HUGE timesaver in comparison to DOM query selectors and addEventListener().</p><p>This app is predominantly styled with Materialise.</p>',
      tools: 'HTML & CSS, Javascript, React, Materialise',
      image: libraryPageImg,
      tags: ['javascript', 'react'],
      url: ' https://joshbjorn.github.io/library-app-react/',
      github: 'https://github.com/joshbjorn/library-app-react',
      year: "2020"
    },
    {
      title: 'New York Times Article Clone',
      shortDescription: 'A clone of an article from the popular American News outlet, New York Times.',
      longDescription: '<p>This page was built as a means to better understand how the CSS Grid and Flexbox functioned. One glance at a NYT article and it’s clear that if one were to attempt to clone it, that session would be a hell of a positioning workout! </p><p>Up until this point, I was kind of winging it with positioning stuff with CSS. Although it isn’t perfect - especially in regards to the whacky grid-system I’ve got going on - I really came out of the other end of this one with a better understanding of the these two crucial concepts. </p>',
      tools: 'HTML & CSS, Flexbox, Grid',
      image: newyorktimesImg,
      tags: ['htmlCss'],
      url: 'https://joshbjorn.github.io/new-york-times-clone',
      github: 'https://github.com/joshbjorn/new-york-times-clone',
      year: "2020"
    },
    {
      title: 'Etch-a-sketch',
      shortDescription: 'An Etch-a-Sketch project that explores the fundamental aspects of Javascript.',
      longDescription: '<p>Another simple JS project which served as an introduction to Javascript, working mostly with the DOM and loops.</p><p>This app is initiated by rendering 256 grey boxes to the screen with an on hover event listener attached to them. As expected, the boxes change colour when hovered over with the setAttribute() function. </p><p>There are also three buttons which are used to re-render the grid. They each prompt for your desired grid size and render a new grid, highlighting the boxes with different styles depending on your selected grid type. </p>',
      tools: 'Javascript',
      image: etchasketchImg,
      tags: ['javascript'],
      url:'https://joshbjorn.github.io/etch-a-sketch', 
      github: 'https://github.com/joshbjorn/etch-a-sketch',
      year: '2019',
    },
    {
      title: 'Calculator',
      shortDescription: 'A calculator built using the fundamental aspects of Javascript.',
      longDescription:'<p>One of my initial projects, this project explores the use of strings, arrays, functions, conditional statements, DOM manipulation and more within Javascript. </p>',
      tools: 'HTML & CSS, Javascript',
      image: calculatorAppImg,
      tags: ['javascript'],
      url: 'https://joshbjorn.github.io/calculator/',
      github: 'https://github.com/joshbjorn/calculator', 
      year: "2019"
    },
    {
      title: 'Rock, Paper, Scissors',
      shortDescription: 'A Rock, Paper, Scissors game made utilising the fundamental aspects of Javascript.',
      longDescription:'<p>A very basic Rock, Paper, Scissors game split into the functions, computerPlay(), userPlay() and playRound().</p><p>Very simply put, computerPlay() is responsible for generating a random number between 0-3. 0 then represents rock, 1 = paper and 2 = scissors. This value is then stored as a string in the compTurn variable. </p><p>userPlay() assigns an event listener to the user buttons, when clicked the corresponding move is stored as a string in the userTurn variable. </p><p>playRound() the compares the outcome of compTurn + userTurn variables with switch statement and announces a winner of the round. Boom! </p><p>The announcements are made with alert() but you get the gist.</p>',
      tools: 'Javascript',
      image: rpsImg,
      tags: ['javascript'],
      url: 'https://joshbjorn.github.io/rock-paper-scissors',
      github: 'https://github.com/joshbjorn/rock-paper-scissors',
      year: '2019'
    },
    {
      title: 'Todo List',
      description: 'Tic-Tac-Toe game made with JS. Study into DOM manipulation techniques and game making in JS.',
      tools: 'JS',
      image: todoAppImg,
      tags: ['javascript'],
      url: '',
      github: ''
    },
    {
      title: 'This Portfolio Page',
      shortDescription: 'A brief look at how I went about creating this project portfolio',
      longDescription: '<p>The aim here was to create a scaleable project portfolio. One where I didn’t have to create a new HTML document for each individual project and then get the server to dish out a messy system like that. The obvious choice here was to use React, which comes with all the nifty uses of JSX and components. </p><p>This portfolio is split into 5 components: <i>Home</i>, <i>ProjectsPage</i>, <i>ProjectInfo</i>, <i>Navbar</i> and <i>Footer</i>. The Homepage, Navbar and Footer are just hardcoded info and links but it make sense when you get to the ProjectsPage and ProjectInfo components. </p><p>Each project and their details are stored as data in a separate JS file and then imported to the app as state. When the <I>ProjectsPage</i> component is loaded, this data is then looped through and then displayed to the screen with a <i>renderProjects()</i> function, which makes use of <i>Array.map().</i> </p><p>Similarly, when a project on the projects page is clicked it renders the <i>ProjectInfo</I>component, which loops through the projects and displays the corresponding data of the project that is clicked. </p><p>Boom! Now when I create something new. All I have to do is add that project as an object to the projects file</p><p>This app is fully responsive and makes use of bootstrap grid to help with this. It also features CSS transitions and one or two JQuery effects. </p>',
      tools: 'Javascript, React, Bootstrap',
      image: portfolioImg,
      tags: ['javascript', 'responsive', 'react', 'bootstrap'],
      url: 'https://joshbjorn.github.io/portfolio-app/',
      github: 'https://github.com/joshbjorn/portfolio-app'
    },
    
    {
      title: 'Google Homepage Clone',
      shortDescription: 'My first project! A clone of Google’s Homepage.',
      tools: 'HTML & CSS',
      image: googleHomepageImg,
      tags: ['htmlCss'],
      url: 'https://joshbjorn.github.io/google-homepage',
      github: 'https://github.com/joshbjorn/google-homepage',
      year: '2019'
    },
]

export default projects