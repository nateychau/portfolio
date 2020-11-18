import facebookPic from "../../assets/images/fb_splash.PNG";

export const ProjectList = {
  facebewk: {
    id: 0,
    info: {
      name: 'facebewk',
      live: 'https://facebewk.herokuapp.com/#/',
      repo: 'https://github.com/nateychau/facebook_fsp',
      location: 'San Francisco, CA',
      time: 'October 2020',
      team: 'Solo Project',
      technoloy: 'JavaScript , React, Ruby on Rails , postgreSQL , CSS3, HTML5, AWS , Heroku',
      about: "Facebewk is a functional Facebook clone that allows users to create profiles for themselves, add other users as friends, and create text and image posts on their own walls and friends' walls. Users can view all of their friends' posts in one place on the news feed page, and add likes to posts and comments that they like.", 
      bullets: ['Conditionally kept track of components to render in react state to avoid excessive re-routing of components being called.', 
      'Created custom actions in Rails’ Action Controller in order to create ‘mirror’ rows in the friendship table for each friendship created. This allowed for faster look-up speed when querying for friendships. ', 
      'Utilized Redux store in order to save data fetched from back end to the front end, and avoid excessive requests for data that had already recently been requested. '],
    },
    role: '',
    picture: facebookPic,
  }
}