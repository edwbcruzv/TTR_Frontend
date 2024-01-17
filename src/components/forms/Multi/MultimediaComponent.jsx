import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Asegúrate de importar Axios
import { URI_BACKEND } from '../../../utils/urls';

const MultimediaComponent = ({ file_id, width, height }) => {
  const [fileData, setFileData] = useState(null);
  const [fileType, setFileType] = useState('unknown');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(URI_BACKEND(`multimedia/${file_id}`), {
          responseType: 'arraybuffer',  // Especifica el tipo de respuesta como arraybuffer para datos binarios
        });

        const mimeType = response.headers['content-type'];
        const file = new Blob([response.data], { type: mimeType });
        setFileData(file);
        setFileType(getMimeType(mimeType));
      } catch (error) {
        console.error('Error al obtener el archivo', error);
      }
    };

    fetchFile();
  }, [file_id]);

  const getMediaType = () => {
    if (!fileData) return null;

    switch (fileType) {
      case 'image':
        return <img src={URL.createObjectURL(fileData)} alt="Imagen" width={width} height={height} />;
      case 'audio':
        return (
          <audio controls width={width}>
            <source src={URL.createObjectURL(fileData)} type={fileData.type} />
            Tu navegador no soporta el elemento de audio.
          </audio>
        );
      case 'video':
        return (
          <video controls width={width} height={height}>
            <source src={URL.createObjectURL(fileData)} type={fileData.type} />
            Tu navegador no soporta el elemento de video.
          </video>
        );
      case 'application':
        return (
          <iframe
            src={URL.createObjectURL(fileData)}
            title="Documento"
            width={width}
            height={height}
            frameBorder="0"
          >
            Tu navegador no soporta la visualización de documentos.
          </iframe>
        );
      default:
        return <div>Tipo de contenido no soportado.</div>;
    }
  };


  const getMimeType = (type) => {
    switch (type) {
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
      case 'image/bmp':
      case 'image/webp':
        return 'image';
      case 'audio/mpeg':
      case 'audio/wav':
      case 'audio/ogg':
      case 'audio/midi':
        return 'audio';
      case 'video/mp4':
      case 'video/webm':
      case 'video/quicktime':
        return 'video';
      case 'application/pdf':
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'application/ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'application/ms-powerpoint':
      case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
        return 'application';
      default:
        return 'unknown';
    }
  };

  return <div>{getMediaType()}</div>;
};

export default MultimediaComponent;
