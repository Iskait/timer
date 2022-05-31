import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../App.js'

function Footer() {
  const {page, setPage} = useContext(Context);
  useEffect(() => {
    setPage(window.location.pathname);
  }, [setPage])
  
  function handlePage (e) {
      if (e.target.tagName !== 'A') return;
      setPage(window.location.pathname);
  }
  return (
    <div className='footer'>
        <div className="footer__sections">
            <div onClick={(e) => handlePage(e)} className="footer__type">
                <Link to='/timer/'
                className={`footer__mode${page === '/timer/' ? ' active' : ''}`}>stopwatch
                </Link>
                <Link to='/timer/countdown'
                className={`footer__mode${page === '/timer/countdown' ? ' active' : ''}`}>timer
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;