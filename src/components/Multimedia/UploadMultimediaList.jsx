import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import MultimediaComponent from './MultimediaComponent'
import { useContext, useEffect, useState } from 'react'
import { helperAXIOS } from '../../helpers/helperAXIOS'
import SessionContext from '../../context/SessionContext'
import { Button, Stack } from '@mui/material'
import { URI_BACKEND } from '../../utils/environments'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

export default function UploadMultimediaList ({ name, setValue, uploadedFilesIds, setUploadedFilesIds }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState([])
  const [error, setError] = useState([])
  const { get, post, put, patch, del } = helperAXIOS()

  useEffect(() => {
    console.log(uploadedFilesIds)

    return () => {
      setValue(name, uploadedFilesIds)
      console.log('bye')
    }
  }, [uploadedFilesIds])

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files)
    if (files.length + uploadedFilesIds.length + newFiles.length > 4) {
      window.alert('Solo se permiten 4 archivos.')
    } else {
      setFiles([...files, ...newFiles])
    }
  }

  const handleRemoveFile = (index) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  const handleUploadIndividual = async (file) => {
    const formData = new FormData()
    formData.append('username', usernameSession)
    formData.append('nombre', file.name.split('.')[0])
    formData.append('archivoMultimedia', file)

    try {
      const res = await post(URI_BACKEND('multimedia'), formData, token)
      if (res.status === 200) {
        setLoading(false)
        console.log(res)
        setUploadedFilesIds([...uploadedFilesIds, res.data.id]) // Agrega el archivo a la lista de archivos cargados
        console.log(file.id)
      } else {
        console.error(res)
        setError(res.error)
      }
    } catch (uploadError) {
      console.error('Error al subir el archivo:', uploadError)
    } finally {
      // Elimina el archivo de la lista de archivos pendientes de carga
      const newFiles = files.filter((f) => f !== file)
      setFiles(newFiles)
      setLoading(false)
    }
  }

  const handleDeleteIndividual = async (id) => {
    try {
      const res = await del(URI_BACKEND(`multimedia/${id}`), token)
      if (res.status === 200) {
        setLoading(false)
        console.log(res)
        setUploadedFilesIds(uploadedFilesIds.filter(elemento => elemento !== id))
      } else {
        console.error(res)
        setError(res.error)
      }
    } catch (uploadError) {
      console.error('Error al eliminar el archivo:', uploadError)
    }
  }

  return (
    <div>
      <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
        Subir Archivo
        <VisuallyHiddenInput type='file' multiple onChange={handleFileChange} />
      </Button>

      {files !== null && files.length > 0 && (
        <div>
          <h3>Archivos Pendientes</h3>
          <ul>
            {files.map((file, index) => (
              <li
                key={index}
                style={{
                  width: 'auto',
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Stack style={{ flex: 1 }}>
                  <strong>{file.name || file.filename}</strong>
                </Stack>
                <Stack>
                  <Button variant='outlined' onClick={() => handleRemoveFile(index)} style={{ marginLeft: '10px' }}>
                    Remove
                  </Button>
                  <Button variant='outlined' onClick={() => handleUploadIndividual(file)} style={{ marginLeft: '10px' }}>
                    Cargar
                  </Button>
                </Stack>
                {/* {console.log(file)} */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {uploadedFilesIds !== null && uploadedFilesIds.length > 0 && (
        <div>
          <h3>Archivos Cargados</h3>
          <ul>
            {uploadedFilesIds.map((uploadedFileId, index) => (
              <li
                key={index}
                style={{
                  width: 'auto',
                  marginBottom: '10px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Stack style={{ flex: 1 }}>
                  <MultimediaComponent file_id={uploadedFileId} width='10%' height='10%' />
                </Stack>
                <Stack>
                  <Button variant='outlined' onClick={() => handleDeleteIndividual(uploadedFileId)} style={{ marginLeft: '10px' }}>
                    Eliminar
                  </Button>
                </Stack>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}
