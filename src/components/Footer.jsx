import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { stopWatch, timer, headerSelector } from '../redux/slices/headerSlice';


function Footer() {
  const type = useSelector(headerSelector);
  const typeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    [...typeRef.current.children].forEach(item => {
      return item.textContent.toUpperCase() === type ? 
      item.classList.add('active') :
      item.classList.remove('active');
    })
  }, [type])

  return (
    <div className='footer'>
        <div className="footer__sections">
            <div
            ref={typeRef} 
            className="footer__type">
                <Link to='/timer'
                onClick={() => dispatch(stopWatch())}
                className="footer__mode">stopwatch
                </Link>
                <Link to='/countdown'
                onClick={() => dispatch(timer())}
                className="footer__mode">timer
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;