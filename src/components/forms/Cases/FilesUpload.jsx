import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Stack } from '@mui/material';

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
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newFiles = [...files];
      [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
      setFiles(newFiles);
    }
  };

  const handleMoveDown = (index) => {
    if (index < files.length - 1) {
      const newFiles = [...files];
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
      setFiles(newFiles);
    }
  };

  return (
    <div>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Subir Archivo
        <VisuallyHiddenInput
          type="file"
          multiple
          onChange={handleFileChange}
        />
      </Button>

      {files.length > 0 && (
        <div>
          <h3>Archivos Cargados</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index} style={{ width:'auto', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <Stack style={{ flex: 1 }}>
                  <strong>{file.name}</strong>
                  {file.type.startsWith('image/') && (
                    <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: '100px', maxHeight: '100px', margin: '10px 0' }} />
                  )}
                  {file.type.startsWith('video/') && (
                    <video controls width="100" height="100" style={{ margin: '10px 0' }}>
                      <source src={URL.createObjectURL(file)} type={file.type} />
                    </video>
                  )}
                  {file.type.startsWith('audio/') && (
                    <audio controls style={{ margin: '10px 0' }}>
                      <source src={URL.createObjectURL(file)} type={file.type} />
                    </audio>
                  )}
                  {file.type === 'application/pdf' && (
                    <embed src={URL.createObjectURL(file)} width="100" height="100" type="application/pdf" style={{ margin: '10px 0' }} />
                  )}
                </Stack>
                <Stack>
                  <Button variant="outlined" onClick={() => handleRemoveFile(index)} style={{ marginLeft: '10px' }}>
                    Remove
                  </Button>
                  <Button variant="outlined" onClick={() => handleMoveUp(index)} disabled={index === 0} style={{ marginLeft: '10px' }}>
                    <ArrowUpwardIcon />
                  </Button>
                  <Button variant="outlined" onClick={() => handleMoveDown(index)} disabled={index === files.length - 1} style={{ marginLeft: '10px' }}>
                    <ArrowDownwardIcon />
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
