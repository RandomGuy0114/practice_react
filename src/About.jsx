import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <div className="container">
        <h1 className="header">Group Number 7</h1>
        <h1 className="header1">Our Group Motto</h1>
        <h3>
          "How CodeGo Change Our Lives Motto"
        </h3>
        <div className="article">
          <h2>Members</h2>
          {createCards()}
        </div>
      </div>
    </div>
  );
}

function createCard(title, subtitle, text) {
  return (
    <div className="card card1" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function createCards() {
  let cards = [];

  // kung may mali paki change nalang
  const cardData = [
    { title: "Clarence Perez", subtitle: "Moto", text: "\"Web development: because solving real-world problems is too hard\"" },
    { title: "Patrick Angeles", subtitle: "Moto", text: "\"We make websites, not miracles\”" },
    { title: "Rica Guno", subtitle: "Moto", text: "\"We build websites like your ex builds relationships\"" },
    { title: "Jomar Neri", subtitle: "Moto", text: "\"Code, coffee, and chaos\"" },
    { title: "Mike Denum", subtitle: "Moto", text: "\"Code today, nap tomorrow\"" },
  ];

  for (let i = 0; i < cardData.length; i++) {
    let card = createCard(cardData[i].title, cardData[i].subtitle, cardData[i].text);
    cards.push(card);
  }
  return (
      <div className='cards110' style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap",}}>
        {cardData.map(card => createCard(card.title, card.subtitle, card.text))}
      </div>
  );
}
/************************************************** */
const style = {
  '@media (max-width: 600px)': {
    'p': {
      fontSize: '14px',
    },
    'h1': {
      fontSize: '18px',
    },
    'h2': {
      fontSize: '16px',
    },
  },
  '@media (min-width: 601px) and (max-width: 900px)': {
    'p': {
      fontSize: '16px',
    },
    'h1': {
      fontSize: '20px',
    },
    'h2': {
      fontSize: '18px',
    },
  },
  '@media (min-width: 901px)': {
    'p': {
      fontSize: '18px',
    },
    'h1': {
      fontSize: '22px',
    },
    'h2': {
      fontSize: '20px',
    },
  },
};

export default About;