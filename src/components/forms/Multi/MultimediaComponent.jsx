import React from 'react';
import { useEffect } from 'react';

const MultimediaComponent = ({ src }) => {
    useEffect(() => {
      console.log(src)
    }, [])
    


  const getFileExtension = (filename) => {
    return filename.split('.').pop();
  };

  const getMediaType = () => {
    const fileExtension = getFileExtension(src);
    const fileType = getMimeType(fileExtension);

    switch (fileType) {
      case 'image':
        return <img src={src} alt="Imagen" />;
      case 'audio':
        return (
          <audio controls>
            <source src={src} type={`audio/${fileExtension}`} />
            Tu navegador no soporta el elemento de audio.
          </audio>
        );
      case 'video':
        return (
          <video controls width="500">
            <source src={src} type={`video/${fileExtension}`} />
            Tu navegador no soporta el elemento de video.
          </video>
        );
      case 'application':
        return (
          <iframe
            src={src}
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

  const getMimeType = (extension) => {
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'bmp':
      case 'webp':
        return 'image';
      case 'mpeg':
      case 'wav':
      case 'ogg':
      case 'midi':
        return 'audio';
      case 'mp4':
      case 'webm':
      case 'quicktime':
        return 'video';
      case 'pdf':
      case 'msword':
      case 'vnd.openxmlformats-officedocument.wordprocessingml.document':
      case 'ms-excel':
      case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'ms-powerpoint':
      case 'vnd.openxmlformats-officedocument.presentationml.presentation':
        return 'application';
      default:
        return 'unknown';
    }
  };

  return <div>{getMediaType()}</div>;
};

export default MultimediaComponent;
