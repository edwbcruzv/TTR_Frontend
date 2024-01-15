import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';
import axios from 'axios';
import { helperAXIOS } from '../../../helpers/helperAXIOS';
import useAuth from '../../../hooks/useAuth';
import { URI_BACKEND } from '../../../utils/urls';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function FilesUpload() {
  const {token,id} = useAuth()
  const [files, setFiles] = React.useState([]);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const {
    get,
    post,
    put,
    patch,
    del
} = helperAXIOS()
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (files.length + newFiles.length > 4) {
      alert('Solo se permiten 4 archivos.');
    } else {
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUploadIndividual = async (file) => {
    console.log(file)
    const formData = new FormData();
    formData.append('usuario_id', id); // Reemplaza con el valor correcto
    formData.append('caso_estudio_id', null); // Reemplaza con el valor correcto
    formData.append('descripcion', 'desc by cruz.'); // Reemplaza con el valor correcto
    formData.append('numero_orden', 0); // Reemplaza con el valor correcto
    formData.append('archivoMultimedia', file);
    console.log(formData)
    let res = await post(URI_BACKEND('multimedia'),formData,token)
      if (res.status === 200) {
        // setLoading(false)
        console.log(res)
        // setResponse(res)
        // handleCloseModalForm()
      }else{
        console.log(res)
        // setError(res.error)
      }
      // setLoading(false)
  };

  return (
    <div>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Subir Archivo
        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
      </Button>

      {files !== null && files.length > 0 && (
        <div>
          <h3>Archivos Cargados</h3>
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
                  alignItems: 'center',
                }}
              >
                <Stack style={{ flex: 1 }}>
                  <strong>{file.name}</strong>
                  {/* ... Resto del código para mostrar el tipo de archivo */}
                </Stack>
                <Stack>
                  <Button variant="outlined" onClick={() => handleRemoveFile(index)} style={{ marginLeft: '10px' }}>
                    Remove
                  </Button>
                  <Button variant="outlined" onClick={() => handleUploadIndividual(file)} style={{ marginLeft: '10px' }}>
                    Cargar
                  </Button>
                </Stack>
              </li>
            ))}
          </ul>
        </div>
      )}
      {uploadProgress > 0 && <LinearProgress variant="determinate" value={uploadProgress} />}
    </div>
  );
}
