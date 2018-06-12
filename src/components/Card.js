import React from 'react';
import '../components/card.css';

const Card = ({name, email, id}) => {
  return(
    <div className='card tc bg-navy dib br3 pa3 ma3 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}`} />
      <div>
         <h1 className='f5'>{name}</h1>
         <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
