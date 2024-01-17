import React, { useEffect, useState } from 'react';

const MultimediaComponent = ({ file }) => {
  const [fileType, setFileType] = useState('unknown');

  useEffect(() => {
    const mimeType = getMimeType(file.type);
    setFileType(mimeType);
  }, [file]);

  const getMediaType = () => {
    switch (fileType) {
      case 'image':
        return <img src={URL.createObjectURL(file)} alt="Imagen" />;
      case 'audio':
        return (
          <audio controls>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Tu navegador no soporta el elemento de audio.
          </audio>
        );
      case 'video':
        return (
          <video controls width="500">
            <source src={URL.createObjectURL(file)} type={file.type} />
            Tu navegador no soporta el elemento de video.
          </video>
        );
      case 'application':
        return (
          <iframe
            src={URL.createObjectURL(file)}
            title="Documento"
            width="600"
            height="400"
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
