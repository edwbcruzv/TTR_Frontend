import React from 'react'
import PropTypes from 'prop-types'
import { Alert, List } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const renderListItem = (textItem, path, iconItem,onClickItemMenu) => {
    return (
        <ListItem key={textItem} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => onClickItemMenu(path)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {iconItem}
            </ListItemIcon>
            <ListItemText primary={textItem} sx={{ opacity: open ? 1 : 0 }} onClick={() => onClickItemMenu(path)} />
          </ListItemButton>
        </ListItem>
      )

}




const ListItemFrame = ({items,onClickItemMenu}) => {

    return (
        <div>
            {/* {
                error && <Alert onClose={()=>{setError(null)}} severity='error'>{error}</Alert>
            } */}
            <List>
                {   
                    items.map(({textItem, path, iconItem}) => {
                        return renderListItem(textItem, path, iconItem,onClickItemMenu)
                    }) 
                }            
            </List>

        </div>
        
    )
  
}

ListItemFrame.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          textItem:PropTypes.string.isRequired,
          path:PropTypes.string.isRequired,
          iconItem:PropTypes.element.isRequired

        }).isRequired
    ).isRequired,

    onClickItemMenu: PropTypes.func.isRequired
}

export default ListItemFrame