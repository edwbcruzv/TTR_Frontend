import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState, useContext } from 'react'
import TableAdmins from './TableAdmins'
import TableTeachers from './TableTeachers'
import TableStudents from './TableStudents'

import SessionContext from '../../../context/SessionContext'
import { ROL_ADMIN } from '../../../utils/environments'

export default function UsersTabs () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            {rol === ROL_ADMIN && <Tab label='Administradores' value='1' />}
            {rol === ROL_ADMIN && <Tab label='Profesores' value='2' />}
            <Tab label='Alumnos' value='3' />
          </TabList>
        </Box>
        {rol === ROL_ADMIN && <TabPanel value='1'><TableAdmins /></TabPanel>}
        {rol === ROL_ADMIN && <TabPanel value='2'><TableTeachers /> </TabPanel>}
        <TabPanel value='3'><TableStudents /> </TabPanel>
      </TabContext>
    </Box>
  )
}
