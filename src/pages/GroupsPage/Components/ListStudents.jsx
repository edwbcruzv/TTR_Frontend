import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ListStudents ({ students }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {students && students.map((student, index) => (
        <ListItem
          key={index}
          disableGutters
          secondaryAction={
            <IconButton aria-label='comment'>
              <DeleteIcon />
            </IconButton>
            }
        >
          <ListItemText primary={student.nombre} />
        </ListItem>
      ))}
    </List>
  )
}
