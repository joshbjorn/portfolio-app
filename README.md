Portfolio App

The aim here was to create a scaleable project portfolio. One where I didn’t have to create a new HTML document for each individual project and then get the server to dish out a messy system like that. The obvious choice here was to use React, which comes with all the nifty uses of JSX and components.

This portfolio is split into 5 components: Home, ProjectsPage, ProjectInfo, >Navbarand Footer. The Homepage, Navbar and Footer are just hardcoded info and links but it make sense when you get to the ProjectsPage and ProjectInfo components. 

Each project and their details are stored as data in a separate JS file and then imported to the app as state. When the ProjectsPagecomponent is loaded, this data is then looped through and then displayed to the screen with a renderProjects()function, which makes use of Array.map().

Similarly, when a project on the projects page is clicked it renders the ProjectInfo component, which loops through the projects and displays the corresponding data of the project that is clicked. 

Boom! Now when I create something new. All I have to do is add that project as an object to the projects file

This app is fully responsive and makes use of bootstrap grid to help with this. It also features CSS transitions and one or two JQuery effects. 