export const WorkList = {
  learningCompass:{
    id: 0,
    name: 'BD - learning compass tutorial',
    about: 'From the beginning of July 2019 to the end of September, I interned at BD (Becton Dickinson) as a Learning Applications Developer. I was a member of their Education Services Team in San Diego, and my work mainly involved improving the user experience of BD Learning Compass, the company’s customer-facing learning management system (LMS).',
    info: {
      team: 'In collaboration with: Sangeetha Ganessan, BD Education Services Team',
      location: 'San Diego, CA',
      time: 'July - September 2019',
      technology: 'JavaScript, HTML5, CSS3, Google Tag Manager',
      bullets: ["Many of our LMS’s first-time users were struggling to navigate around the site, and to find the courses that they needed to take. With team members, I conducted usability tests to understand user needs, and to find the issues that users were struggling with. To address the pain-points that we found, I designed and developed a tutorial overlay application that would appear on the site when a user logged in for the first time. The overlay was created in HTML/Javascript/CSS. The LMS was hosted on a closed source platform, which made it difficult for us to add custom code. I found a way around this by loading my JS through a Google Tag Manager feature that was built into the LMS platform. Groundbreaking stuff."],
    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/bdlc.PNG',
  },
  byNameList:{
    id: 1,
    name: 'RTFH - By Name List',
    about: "The By Name List is a system that San Diego's Continuum of Care uses to match homeless clients with housing and shelter",
    info: {
      team: 'In collaboration with the Regional Task Force on the Homeless',
      location: 'San Diego, CA',
      time: 'January - March 2020',
      technology: 'SQL, Looker',
      bullets: ["I wrote all queries, and designed a dashboard for the system, based on required specs. Queries were written in SQL within Looker, a data analytics platform.", 
      "This version of the By Name List went on to match hundreds of homeless clients with housing or shelter"]
    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/logo-rtfhsd.png',
  },
}