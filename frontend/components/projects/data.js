export const DataList = {
  cogs108:{
    id: 0,
    name: 'Twitter Sentiment Analysis - NBA Playoffs',
    about: 'A data science project that aimed to answer the question: What is twitter’s overall sentiment towards NBA players on days where their team wins vs days where their team loses?',
    paper: 'https://github.com/nateychau/FinalProjects-Sp19/blob/master/FinalProject_group142.ipynb',
    info: {
      team: 'In collaboration with: Jinchen Zou, Jonathan Ho, Shaival Divatia',
      location: 'San Diego, CA',
      time: 'April - June 2019',
      technology: 'Python, Tweepy API, Twitter API, Matplotlib, Jupyter Notebook',
      bullets: ["To answer our question, we anaylyzed the sentiment of tweets about Kevin Durant and Giannis Antetokounmpo throughout the NBA playoffs, and matched overall sentiment to days where their team won or loss",
    "We used Twitter's API to record tweets with certain keywords or hashtags (ie 'KD', 'Giannis', 'Greek Freak', etc), and the Tweepy API to analyze the sentiment of these tweets", 
    "Data cleaning and visualizations were done with Python", "Overall, we saw a weak relationship between the sentiment value of tweet's about a basketball player and the results of their games, though there are factors that may have skewed our results (which are discussed in the paper)"],
    },
    picture: 'https://raw.githubusercontent.com/nateychau/portfolio/main/frontend/assets/images/nba_tweets.png',
  },
}