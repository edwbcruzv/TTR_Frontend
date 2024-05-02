import * as React from 'react'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { Alert, AlertTitle, Box, CircularProgress } from '@mui/material'
import { useContext } from 'react'
import CrudInscriptionContext from '../../context/CrudInscriptionContext'

export default function GroupPopover () {
  const {
    response, error, loading,
    viewDataEdit, createData,
    updateData, deleteData,
    register, handleSubmit, watch, errors, setValue, getValues,
    openModalForm, handleOpenModalForm, handleCloseModalForm,
    openModalView, handleOpenModalView, handleCloseModalView
  } = useContext(CrudInscriptionContext)
  const [anchorEl, setAnchorEl] = React.useState(null)

  function onSubmit (data) {
    createData(data)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Button aria-describedby={id} variant='contained' onClick={handleClick}>
        unirse a un grupo
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>

          <Grid
            container
            spacing={1}
            direction='column'
            justifyContent='center'
            alignItems='center'
            alignContent='center'
            wrap='wrap'
            sx={{ width: '400px', height: '140px', border: '10px' }}
          >
            <Grid
              container
              spacing={1}
              direction='row'
              justifyContent='center'
              alignItems='center'
              alignContent='center'
            >

              <Grid item><TextField {...register('clave_grupo', { required: { value: true, message: 'Es requerido' } })} id='clave_grupo' label='Clave del grupo' type='text' variant='outlined' error={errors.clave_grupo} helperText={(errors.clave_grupo) && errors.clave_grupo.message} /></Grid>
              <Grid item>
                <Button variant='outlined' color='primary' type='submit'>Unirse</Button>
              </Grid>
            </Grid>
            <Grid item>

              {!loading || <CircularProgress color='inherit' />}

              {!error && response && <Alert severity='success'>
                <AlertTitle>Success</AlertTitle>
                <strong>Usuario creado correctamente</strong>
                                     </Alert>}

              {error && <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                Mensaje: <strong>{res.error}</strong>
                        </Alert>}
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </div>
  )
}
