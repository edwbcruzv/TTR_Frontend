import Editor from './Editor'
import { Box, Grid, styled } from '@mui/material'
import { useContext, useEffect } from 'react'
import { DataConst } from '../../context/DataProvide'
import CrudSolucionContext from '../../context/CrudSolucionContext'

const Container = styled(Box)`
    background-color: #ffffff;
    
    display: flex;
`
function Code () {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst)
  const { loading, watch } = useContext(CrudSolucionContext)
  useEffect(() => {
    setHtml(watch('strHtml'))
    setCss(watch('strCss'))
    setJs(watch('strJs'))
  }, [loading])

  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='stretch'
    >
      <Grid item>
        <Editor
          className='Editor'
          language='xml'
          heading='HTML'
          value={html}
          onChange={setHtml}
          color='#FF3C41'
        />
      </Grid>
      <Grid item>

        <Editor
          language='css'
          heading='CSS'
          value={css}
          onChange={setCss}
          color='#0EBEFF'
        />
      </Grid>
      <Grid item>

        <Editor
          language='javascript'
          heading='JS'
          value={js}
          onChange={setJs}
          icon='( )'
          color='#FCD000'
        />
      </Grid>
    </Grid>
  )
}

export default Code
