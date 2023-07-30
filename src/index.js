import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test(){
  const [movieRating,steMovieRating]=useState(0)
  return(
    <div>
      <StarRating color="blue" maxRating={10}/>
      <p>This movie is rated {movieRating} stars</p>

    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < StarRating maxRating={5} messages={["Teribl","Bad","Okay","Good","Amazing"]}/>
    < StarRating maxRating={5} size={24} color='red' defaultRating={3}/>
    <Test/>
  </React.StrictMode>
);

