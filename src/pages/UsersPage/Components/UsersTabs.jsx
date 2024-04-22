import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import TableAdmins from './TableAdmins'
import TableTeachers from './TableTeachers'
import TableStudents from './TableStudents'

export default function UsersTabs () {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Administradores' value='1' />
            <Tab label='Profesores' value='2' />
            <Tab label='Alumnos' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'><TableAdmins /></TabPanel>
        <TabPanel value='2'><TableTeachers /> </TabPanel>
        <TabPanel value='3'><TableStudents /> </TabPanel>
      </TabContext>
    </Box>
  )
}
