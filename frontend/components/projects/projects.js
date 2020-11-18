export const ProjectList = {
  facebewk: {
    id: 0,
    name: 'facebewk',
    about: "Facebewk is a functional Facebook clone that allows users to create profiles for themselves, add other users as friends, and create text and image posts on their own walls and friends' walls. Users can view all of their friends' posts in one place on the news feed page, and add likes to posts and comments that they like.", 
    live: 'https://facebewk.herokuapp.com/#/',
    repo: 'https://github.com/nateychau/facebook_fsp',
    info: {
      team: 'Solo Project',
      location: 'San Francisco, CA',
      time: 'October 2020',
      technology: 'JavaScript , React, Ruby on Rails , postgreSQL , CSS3, HTML5, AWS , Heroku',
      bullets: ['Conditionally kept track of components to render in react state to avoid excessive re-routing of components being called.', 
      'Created custom actions in Rails’ Action Controller in order to create ‘mirror’ rows in the friendship table for each friendship created. This allowed for faster look-up speed when querying for friendships. ', 
      'Utilized Redux store in order to save data fetched from back end to the front end, and avoid excessive requests for data that had already recently been requested. '],
    },
    role: '',
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/fb_splash.PNG',
  }, 
  schopenhauer: {
    id: 1,
    name: 'schopenhauer',
    about: "Schopenhauer is a full-stack web app for users to create and share music visualizers for their favorite songs",
    live: 'http://schopenhauer.herokuapp.com/#/',
    repo: 'https://github.com/eric2523/Schopenhauer',
    info: {
      team: 'In Collaboration with Eric Xian, Harold Parker, Yuehan Huang',
      location: 'San Francisco, CA',
      time: 'October 2020 - Current',
      technology: 'Javascript, React, CSS3 , HTML5, Canvas API, MongoDB, Express.js, AWS, Heroku',
      bullets:['Constructed music visualizers by connecting handles from our self-made particle system to frequency/beat/amplitude data extracted from music',
        'Designed a visualizer template component that could take desired settings as input from a plain Javascript object. This template was reused throughout the app and kept code DRY. ',
        'Designed user profile page, featuring visualizer thumbnails, with React and Javascript. Passed additional props to template mentioned above, which caused visualizers to play on-hover.'],
    },
    role: '',
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/schopsplash_edit.PNG'
  }, 
  dropzone: {
    id: 2,
    name: 'dropzone',
    about: 'Dropzone is a game where players direct a falling ball into a goal by drawing lines to control the direction that the ball falls in. Players can collect trophies along the path for extra points.',
    live: 'https://nateychau.github.io/dropzone_game/',
    repo: 'https://github.com/nateychau/dropzone_game',
    info: {
      team: 'Solo Project',
      location: 'San Francisco, CA',
      time: 'November 2020',
      technology: 'JavaScript, Canvas API, HTML5, CSS3',
      bullets: ["The line drawing on mouse-click, with real-time preview of the line to be drawn, was achieved by stacking 2 different canvases on top of each other, and by attaching event listeners to the mouse-down, mouse-move, and mouse-up events. When a user is in draw mode, the script listens for a mouse-down event, which sets the draw flag to true. When the draw flag is true, the mouse-move event draws a line on a top level canvas from the starting (mouse-down) position to the current mouse position. On each mouse-move event, the canvas is cleared and a new line is drawn, to prevent the line from the previous frame from persisting. When the mouse-up event occurs, the line on the top level canvas is cleared, and a line (with the exact same start and end points) is drawn on a middle-level canvas, where all previous lines are drawn. The watermelon's animation frames are drawn on the third-level canvas. Layering the canvases this way makes clearing and redrawing the picture from the previous frame much easier."]
    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/drop_splash.PNG'
  },
  learningCompass:{
    id: 3,
    name: 'bd learning compass tutorial',
    about: 'From the beginning of July 2019 to the end of September, I interned at BD (Becton Dickinson) as a Learning Applications Developer. I was a member of their Education Services Team in San Diego, and my work mainly involved improving the user experience of BD Learning Compass, the company’s customer-facing learning management system (LMS).',
    live: '',
    repo: '',
    info: {
      team: 'In collaboration with: Sangeetha Ganessan, BD Education Services Team',
      location: 'San Diego, CA',
      time: 'July - September 2019',
      technology: 'JavaScript, HTML5, CSS3, Google Tag Manager',
      bullets: ["Many of our LMS’s first-time users were struggling to navigate around the site, and to find the courses that they needed to take. With team members, I conducted usability tests to understand user needs, and to find the issues that users were struggling with. To address the pain-points that we found, I designed and developed a tutorial overlay application that would appear on the site when a user logged in for the first time. The overlay was created in HTML/Javascript/CSS. The LMS was hosted on a closed source platform, which made it difficult for us to add custom code. I found a way around this by loading my JS through a Google Tag Manager feature that was built into the LMS platform. Groundbreaking stuff."],
    },
    picture: ''
  },
}