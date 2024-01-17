import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';
import axios from 'axios';
import { helperAXIOS } from '../../../helpers/helperAXIOS';
import useAuth from '../../../hooks/useAuth';
import { SERVER_URL, URI_BACKEND } from '../../../utils/urls';
import { useEffect } from 'react';
import useAxios from '../../../hooks/useAxios';
import MultimediaComponent from '../Multi/MultimediaComponent';

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

export default function FilesUpload({ name, setValue, uploadedFilesIds, setUploadedFilesIds }) {

  const { token, id } = useAuth();
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [error, setError] = React.useState([]);
  const {get,post,put,patch,del } = helperAXIOS();
  
  useEffect(() => {
    console.log(uploadedFilesIds)

    return () => {
      setValue(name, uploadedFilesIds);
      console.log("bye")
    };
  }, [uploadedFilesIds]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (files.length + uploadedFilesIds.length + newFiles.length > 4) {
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
    const formData = new FormData();
    formData.append('usuario_id', id);
    formData.append('nombre', file.name.split('.')[0]);
    formData.append('archivo_multimedia', file);

    try {
      let res = await post(URI_BACKEND('multimedia'), formData, token);
      if (res.status === 200) {
        setLoading(false);
        console.log(res);
        setUploadedFilesIds([...uploadedFilesIds, res.data.id]); // Agrega el archivo a la lista de archivos cargados
        console.log(file.id)
      } else {
        console.error(res);
        setError(res.error);
      }
    } catch (uploadError) {
      console.error('Error al subir el archivo:', uploadError);
    } finally {
      // Elimina el archivo de la lista de archivos pendientes de carga
      const newFiles = files.filter((f) => f !== file);
      setFiles(newFiles);
      setLoading(false);
    }
  };

  const handleDeleteIndividual = async (id) => {
    try {
      let res = await del(URI_BACKEND(`multimedia/${id}`), token);
      if (res.status === 200) {
        setLoading(false);
        console.log(res);
        setUploadedFilesIds(uploadedFilesIds.filter(elemento => elemento !== id))
      } else {
        console.error(res);
        setError(res.error);
      }
    } catch (uploadError) {
      console.error('Error al eliminar el archivo:', uploadError);
    } 
  };

  return (
    <div>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Subir Archivo
        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
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
                  alignItems: 'center',
                }}
              >
                <Stack style={{ flex: 1 }}>
                  <strong>{file.name || file.filename}</strong>
                </Stack>
                <Stack>
                  <Button variant="outlined" onClick={() => handleRemoveFile(index)} style={{ marginLeft: '10px' }}>
                    Remove
                  </Button>
                  <Button variant="outlined" onClick={() => handleUploadIndividual(file)} style={{ marginLeft: '10px' }}>
                    Cargar
                  </Button>
                </Stack>
                {console.log(file)}
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
                  alignItems: 'center',
                }}
              >
                <Stack style={{ flex: 1 }}>
                  <MultimediaComponent file_id={uploadedFileId} width={100} height={100}  />
                </Stack>
                <Stack>
                <Button variant="outlined" onClick={() => handleDeleteIndividual(uploadedFileId)} style={{ marginLeft: '10px' }}>
                    Eliminar
                  </Button>
                </Stack>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
