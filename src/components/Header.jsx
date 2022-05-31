import React from 'react';



function Header({type}) {
  return (
    <header className='stopwatch__header'>
        {type}
    </header>
  )
}

export default Header;

