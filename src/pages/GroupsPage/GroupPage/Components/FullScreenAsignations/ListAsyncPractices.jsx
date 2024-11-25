import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import useAxios from '../../../../../hooks/useAxios'
import { URI_BACKEND } from '../../../../../utils/environments'
import SessionContext from '../../../../../context/SessionContext'
import CrudPracticaContext from '../../../../../context/CrudPracticaContext'

function sleep (duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}

export default function ListAsyncPractices ({ grupoId }) {
  const { token, rol, usernameSession, nombre, email, isValid, deleteSession } = useContext(SessionContext)

  const {
    loading,
    response,
    responseAll,
    error,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalPracticaForm,
    handleOpenModalPracticaForm,
    handleCloseModalPracticaForm,

    openModalPracticaView,
    handleOpenModalPracticaView,
    handleCloseModalPracticaView,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica,
    asignarPractica
  } = useContext(CrudPracticaContext)

  const [practicas, setPracticas] = useState([])
  function onSubmit (data) {
    data.grupoId = grupoId
    console.log(data)
    asignarPractica(data)
  }

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    function fAsync () {
      let listAux = []
      getAllPracticasByProfesorUsername(usernameSession)

      console.log('responseAll: ', responseAll)
      if (!loading && responseAll) {
        // console.log(Data)
        listAux = responseAll.map(item => ({
          title: item.titulo,
          practiceId: item.id
        }))
        console.log(listAux)
        setOptions(listAux)
      }
    }

    if (open) {
      console.log('abierto')
      fAsync()
    }
  }, [open, loading])

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        spacing={2}
      >
        <Grid item>

          <Autocomplete
            id='asynchronous-demo'
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true)
            }}
            onClose={() => {
              setOpen(false)
            }}
            onChange={(e, value) => setValue('practicaId', value.practiceId)}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register('practica', { required: { value: true, message: 'Es requerido' } })}
                label='Seleccione la practica'
                variant='outlined'
                error={errors.practica}
                helperText={(errors.practica) && errors.practica.message}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color='inherit' size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item>

          <FormControl>
            <FormLabel id='demo-row-radio-buttons-group-label'>Seleccione</FormLabel>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
            >
              <FormControlLabel {...register('option')} value='1' control={<Radio />} label='Todos los equipos' />
              <FormControlLabel {...register('option')} value='0' control={<Radio />} label='Individual' />
              {/* <FormControlLabel
            value='disabled'
            disabled
            control={<Radio />}
            label='other'
          /> */}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant='outlined' type='submit'>Asignar practica</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
