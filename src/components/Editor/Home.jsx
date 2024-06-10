import React from 'react'
import { Paper } from '@mui/material'
import Header from './Header'
import Code from './Code'
import Result from './Result'
import './App.css'

function Home () {
  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        {/* <Header /> */}
        <Code />
      </Paper>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Result />
      </Paper>
    </>
  )
}

export default Home
