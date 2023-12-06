import React, { useState } from 'react';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import NavItems from './BurgerNav'
import useMediaQuery from '@material-ui/core/useMediaQuery';


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 700px)');

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      {isMobile && (
      <span>
        <IconButton aria-label="Menu" onClick={toggleMenu} style={{color: 'white'}}>
          <Menu/>
        </IconButton>
        {isOpen && (
            <NavItems/>
        )}
      </span>
      )}
      </>  
    );
  };

  export default BurgerMenu;