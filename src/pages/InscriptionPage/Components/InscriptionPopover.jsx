import * as React from 'react'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { useContext } from 'react'
import CrudInscripcionContext from '../../../context/CrudInscripcionContext'
import { Box } from '@mui/material'


const style_boton = {
  backgroundColor : '#9d5ceb'
}
export default function InscriptionPopover () {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const {
    response,
    error,
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    getInscripcion,
    getAllInscripcionesByGrupoId,
    getAllInscripcionesByEstudianteUsername,
    createInscripcion,
    updateInscripcion,
    deleteInscripcion
  } = useContext(CrudInscripcionContext)
  function onSubmit (data) {
    // console.log(data)
    createInscripcion(data)
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
      <Button aria-describedby={id} variant='contained' onClick={handleClick} style={style_boton}>
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

              <Grid item><TextField {...register('codigo', { required: { value: true, message: 'Es requerido' } })} id='codigo' label='Codigo del grupo' type='text' variant='outlined' error={errors.codigo} helperText={(errors.codigo) && errors.codigo.message} /></Grid>
              <Grid item>
                <Button variant='outlined' color='primary' type='submit'>Unirse</Button>
              </Grid>
            </Grid>

            {/* {loading || <Grid item> <CircularProgress color='inherit' /></Grid>} */}

          </Grid>
        </Box>
      </Popover>
    </div>
  )
}
