import React from 'react';
import './newscard.css';
import { Link } from 'react-router-dom';


function NewsCards() {
  return (

    <Link to="newsdetail">
      <div className='newscards'>
        <div className="newsCardImage">
          <img src="https://static.toiimg.com/thumb/imgsize-64510,msid-98360158,width-700,resizemode-4/98360158.jpg" alt="Loading..." />
        </div>
        <div className="newsDetail">
          <div className="cardTitle">
            India vs Australia Live Score: Mitchell Starc ends Shreyas Iyer's stay
          </div>
          <div className="cardDiscription">
          IND vs AUS 3rd Test: India were 79 for four at tea in their second innings on the second day of the third Test against Australia. India still trail Australia by nine runs with three full days play rem...READ MORE
          </div>
        </div>
      </div>

    </Link>
  )
}

export default NewsCards