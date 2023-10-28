import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NavBarUser from '../navbars/NavBarUser';
import ListMenu from './ListMenu';

export default function DrawerFrame({children}) {
  const [isActivate, setIsActivate] = React.useState(false);

  const toggleDrawer = (bool) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsActivate(bool);
  }
  
  return (
    <div>
          <NavBarUser handleDrawerMenu={toggleDrawer} />
          <SwipeableDrawer
            anchor={"left"}
            open={isActivate}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <ListMenu handleDrawer={toggleDrawer}/>
          </SwipeableDrawer>
          {children}
    </div>
  );
}