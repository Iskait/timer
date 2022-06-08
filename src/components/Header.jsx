import { useSelector } from 'react-redux';
import { headerSelector } from '../redux/slices/headerSlice';

function Header() {
  const type = useSelector(headerSelector);
  return (
    <header className='stopwatch__header'>
        {type}
    </header>
  )
}

export default Header;

