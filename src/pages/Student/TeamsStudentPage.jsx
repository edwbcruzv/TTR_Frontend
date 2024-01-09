import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { Button, Divider } from '@mui/material'
import GroupPopover from '../../components/Popovers/GroupPopover';
import { CrudInscriptionProvider } from '../../context/CrudInscriptionContext';

const TeamsStudentPage = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <MiniDrawerFrame>
      <CrudInscriptionProvider>
      <GroupPopover/>
      <Divider/>

      </CrudInscriptionProvider>

    </MiniDrawerFrame>
  )
}

export default TeamsStudentPage