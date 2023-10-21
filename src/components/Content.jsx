import React from 'react';
import "./Content.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment } from '@fortawesome/free-solid-svg-icons';
const Content = () => {
    return(
    <div className="content">
          <div>
            <div className='cimg'></div>
            <ul className="info">
              <ol className='dmitry '>
               Dmitry.K
              </ol>
              <ol>
                Date of birth: 2 january
              </ol>
              <ol>
                City: Minsk
              </ol>
              <ol>
              Education: BSU'11
              </ol>
              <ol>
              Web Site:https://it-kamasutra.com 
              </ol>
            </ul>
          </div>
          <div className="posts">
            <h2>My posts</h2>
            <textarea placeholder="your news..."></textarea>
            <button>Send </button>
            <h4><FontAwesomeIcon icon={faComment} />  Hey, why nobody loves me? </h4>
            <h4 ><FontAwesomeIcon icon={faComment} />  It is our new comments</h4>
          </div>
      </div>
    );
}
export default Content;