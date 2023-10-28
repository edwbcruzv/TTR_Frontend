import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const ListMenu = ({handleDrawer}) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawer(false)}
      onKeyDown={handleDrawer(false)}
    >
      <List>
        {["Administradores", "Profesores", "Alumnos"].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={()=>{console.log("aqui la funcionalidad del boton")}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Grupos", "Equipos", "Casos" ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListMenu