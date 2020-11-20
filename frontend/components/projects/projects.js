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
      team: 'In collaboration with Eric Xian, Harold Parker, Yuehan Huang',
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
  learningCompass:{
    id: 3,
    name: 'BD learning compass tutorial',
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
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/bdlc.PNG',
  },
  climbLog: {
    id: 4,
    name: 'climb log',
    about: "Climb Log is a web app I made for fun, and as a learning experience. For people familiar with the rock climbing database Mountain Project, Climb Log pulls a users' ticks from MP's database, and creates visualizations for it in the form of 2 graphs and a table.",
    live: 'https://nateychau.github.io/MP-Ticks-App/',
    repo: 'https://github.com/nateychau/MP-Ticks-App',
    info: {
      team: 'Solo Project',
      location: 'San Diego, CA',
      time: 'June 2020',
      technology: 'JavaScript, CSS3 (Bootstrap), Mountain Project API',
      bullets: ["This was something that I had wanted from Mountain Project, and it wasn't until I had completed Climb Log that I discovered that MP actually has a similar feature. The app is still a work in progress, but I feel like its at a point where I'm comfortable presenting it (at least on desktop lol - mobile functionality is still in progress). For people interested in using it, you need to have an active MP account with ticks (currently only pulls boulder ticks). There are still issues with responsiveness and data fetching, so I'd appreciate any feedback or suggestions."],

    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/climblog.PNG'
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
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/drop_splash.PNG',
  },
  dababyvinci: {
    id: 5,
    name: 'DaBaby Vinci',
    about: "DaBaby Vinci was a submission to Mintbean's 'Graffiti Wall' Hackathon, which ran from Nov 6 - 12, 2020.",
    live: 'https://nateychau.github.io/graffiti_wall/',
    repo: 'https://github.com/nateychau/graffiti_wall',
    info: {
      team: 'In collaboration with Eric Xian and Yuehan Huang',
      location: 'San Francisco, CA',
      time: 'November 2020 (1 week)',
      technology: 'JavaScript, Canvas API, HTML5, CSS3, html2canvas API',
      bullets: ["Features adjustable spray density and reticle size, color picker, and screen saving", 
        "My role for this hackathon was focused on creating the UI, implenting spray sound, and creating the mouse reticle preview",],
    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/dbvinci.PNG',
  }
  
}