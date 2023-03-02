import React from 'react';
import './home.css'
import NewsCards from '../../component/newscards/NewsCards'

function Home() {
  return (
    <div className='homepage'>
      <div className="homepagecards">
      <NewsCards/>
      <NewsCards/>
      <NewsCards/>
      <NewsCards/>
      </div>
      <div className="advertisement">
      advertisement....
      </div>
    </div>
  )
}

export default Home