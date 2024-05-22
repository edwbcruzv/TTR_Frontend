import React, { useState, useEffect, useRef } from 'react'
import Tribute from 'tributejs'
import { Editor, createEmptyValue } from 'react-rte'
import "../../../styles/editor.css"

export default function EditorHTML () {
  const [editorValue, setEditorValue] = useState(createEmptyValue())
  const [html, setHtml] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const tributeRef = useRef(null)
  const textareaRef = useRef(null)

  //= =======================Revisar los atributos de cada etiqueta=================

  const menuItems = [
    { symbol: '<!DOCTYPE  html>', tag: '<!DOCTYPE>', description: 'Define el tipo de documento' },
    { symbol: 'h1', tag: '<h1 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h1>', description: 'Encabezado 1' },
    { symbol: 'h2', tag: '<h2 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h2>', description: 'Encabezado 2' },
    { symbol: 'h3', tag: '<h3 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h3>', description: 'Encabezado 3' },
    { symbol: 'h4', tag: '<h4 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h4>', description: 'Encabezado 4' },
    { symbol: 'h5', tag: '<h5 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h5>', description: 'Encabezado 5' },
    { symbol: 'h6', tag: '<h6 id="miId" class="miClase" style="color: blue;" aria-label="Título principal" lang="es"></h6>', description: 'Encabezado 6' },
    { symbol: 'B', tag: '<strong id="destacado" class="texto-destacado" style="font-size: 18px; color: red;"></strong>', description: 'Define texto en negrita' },
    { symbol: 'I', tag: '<em id="enfasis1" class="texto-enfasis" style="font-size: 18px; color: blue;"></em>', description: 'Texto en cursiva' },
    { symbol: 'U', tag: '<u id="subrayado1" class="texto-subrayado" style="text-decoration: underline;"></u>', description: 'Texto subrayado' },
    { symbol: 'S', tag: '<strike id="textoTachado" class="texto-tachado" style="text-decoration: line-through;"></strike>', description: 'Texto tachado' },
    { symbol: 'AlignLeft', tag: '<div style="text-align: left;" id="miDiv" class="miClase"></div>', description: 'Alinear a la izquierda' },
    { symbol: 'AlignRight', tag: '<div style="text-align: right;" id="miDiv" class="miClase"></div>', description: 'Alinear a la derecha' },
    { symbol: 'AlignCenter', tag: '<div style="text-align: center;" id="miDiv" class="miClase"></div>', description: 'Alinear al centro' },
    { symbol: 'Justify', tag: '<div style="text-align: justify;" id="miDiv" class="miClase"></div>', description: 'Justificar texto' },
    { symbol: 'UL', tag: '<ul id="miLista" class="miClase" style="list-style-type: square;"><li></li></ul>', description: 'Lista desordenada' },
    { symbol: 'OL', tag: '<ol id="miListaOrdenada" class="lista-ordenada" style="list-style-type: upper-roman;"><li></li></ol>', description: 'Lista ordenada' },
    { symbol: 'Blockquote', tag: '<blockquote id="miCita" class="cita-destacada" style="margin-left: 20px; border-left: 2px solid #ccc;" cite="https://www.ejemplo.com/articulo123"></blockquote>', description: 'Define una sección que tiene otra fuente' },
    { symbol: 'Image', tag: '<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200" title="Haga clic para ampliar" id="miImagen" class="imagen-destacada"/>', description: 'Imagen, sustituir el # por el link de la imagen.' },

    { symbol: 'Font', tag: '<p style="font-size: 16px;" style="font-family: Arial, sans-serif;"></p>', description: 'Cambiar fuente' },
    { symbol: 'a', tag: '<a href="#" target="_blank" title="Visitar Ejemplo.com" rel="nofollow"></a>', description: 'Enlace, sustituir el # por la URL.' },
    { symbol: 'body', tag: '<body bgcolor="#F0F0F0" text="#333333" link="#0000FF"></body>', description: 'Define el cuerpo del documento' },
    { symbol: 'col', tag: '<col span="2" style="background-color: #F0F0F0;" width="100px" align="center"></col>', description: 'Define las propiedades de la columna para cada columna del elemento <colgroup>' },
    { symbol: 'div', tag: '<div id="miDiv" class="miClase" title="Información adicional" dir="rtl"></div>', description: 'División genérica' },
    { symbol: 'footer', tag: '<footer id="miFooter" class="clase-footer" role="contentinfo" aria-label="Pie de página de ejemplo"></footer>', description: 'Pie de página' },
    { symbol: 'table', tag: '<table border="1" width="100%" height="200" cellpadding="10" cellspacing="5" align="center" role="grid" aria-label="Tabla de datos de ventas trimestrales"></table>', description: 'Tabla' },
    { symbol: 'tbody', tag: '<tbody id="miTablaDeDatos" class="tabla-de-datos"></tbody>', description: 'Cuerpo de la tabla' },
    { symbol: 'td', tag: '<td id="miCelda" class="celda-de-datos" colspan="2" rowspan="3" headers="encabezado1"></td>', description: 'Celda de la tabla' },
    { symbol: 'th', tag: '<th id="encabezado1" class="encabezado-especial" scope="col" colspan="2"></th>', description: 'Celda de encabezado de la tabla' },
    { symbol: 'tr', tag: '<tr id="miFila" class="fila-especial" align="center" valign="middle" style="background-color: #F0F0F0; color: #333;"></tr>', description: 'Fila de la tabla' },
    { symbol: 'video', tag: '<video src="#" width="640" height="360" autoplay loop preload="auto" muted></video>', description: 'Video' },
    { symbol: 'span', tag: '<span id="miSpan" class="clase-especial" style="color: red; font-weight: bold;"></span>', description: 'Span' },
    { symbol: 'section', tag: '<section id="miSeccion" class="seccion-destacada" style="background-color: #F0F0F0; padding: 20px;"></section>', description: 'Section' },
    { symbol: 'textarea', tag: '<textarea id="miTextArea" placeholder="Escribe tus comentarios aquí" name="comentarios"></textarea>', description: 'Textarea' },
    { symbol: 'track', tag: '<track kind="subtitles" src="subtitulos-es.vtt" srclang="es" label="Español"></track>', description: 'Track' },
    { symbol: 'option', tag: '<option value="opcion1" selected disabled hidden label="Esta es la opción 1"></option>', description: 'Option' },
    { symbol: 'nav', tag: '<nav id="menu-navegacion" class="menu-principal" role="navigation"></nav>', description: 'Navigation' },
    { symbol: 'head', tag: '<head></head>', description: 'Cabeza del documento' },

    { symbol: 'title', tag: '<title></title>', description: 'Título del documento' },
    { symbol: 'link', tag: '<link rel="stylesheet" href="estilos.css"></link>', description: 'Enlace externo' },
    { symbol: 'meta', tag: '<meta name="description" content="Descripción de la página web"></meta>', description: 'Metadatos' },
    { symbol: 'style', tag: '<style body {font-family: Arial, sans-serif; background-color: #f0f0f0;} h1 {color: blue;}></style>', description: 'Estilos CSS' },
    { symbol: 'article', tag: '<article id="mi-articulo" class="articulo-principal"></article>', description: 'Define un artículo' },
    { symbol: 'aside', tag: '<aside id="mi-barra-lateral" class="barra-lateral"></aside>', description: 'Define el contenido lateral del contenedor de una página' },
    { symbol: 'header', tag: '<header id="cabecera-principal" class="cabecera-principal" role="banner"></header>', description: 'Encabezado' },
    { symbol: 'small', tag: '<small id="texto-pequeno" class="estilo-personalizado"></small>', description: 'Texto pequeño' },
    { symbol: 'cite', tag: '<cite id="obra-citada" class="cita-personalizada" title="Autor de la obra citada"></cite>', description: 'Define el título de un trabajo' },
    { symbol: 'mark', tag: '<mark id="texto-resaltado" class="resaltado-personalizado" title="Término importante"></mark>', description: 'Texto resaltado' },
    { symbol: 'form', tag: '<form action="procesar_formulario.php" method="post" name="miFormulario" target="_blank" autocomplete="on"></form>', description: 'Formulario' },
    { symbol: 'embed', tag: '<embed src="video.mp4" type="video/mp4" width="320" height="240" type="audio/mp3" autoplay></embed>', description: 'Contenido multimedia' },
    { symbol: 'label', tag: '<label class="etiqueta-personalizada" for="nombre" form="formulario"></label>', description: 'Etiqueta' },
    { symbol: 'select', tag: '<select id="frutas" class="select-personalizado" size="3" multiple name="frutas"></select>', description: 'Selección' },
    { symbol: 'input', tag: '<input type="text" name="nombre" value="John Doe" required></input>', description: 'Campo de entrada' },
    { symbol: 'fieldset', tag: '<fieldset id="datos-personales" class="formulario" disabled></fieldset>', description: 'Grupo de controles de formulario' },
    { symbol: 'tfoot', tag: '<tfoot id="pie-tabla" class="estilo-pie" data-total="1000" role="contentinfo"></tfoot>', description: 'Pie de tabla' },
    { symbol: 'AñadirComentario', tag: '<!- ... ->', description: 'Añade un comentario dentro del archivo' },
    { symbol: 'abreviación', tag: '<abbr title="Langue des signes québécoise" lang="fr" class="termino-abreviado"></abbr>', description: 'Define una abreviación' },

    { symbol: 'address', tag: '<address id="miDireccion" class="contacto" title="Información de contacto"></address>', description: 'Define la información de contacto del autor/propietario del documento' },
    { symbol: 'area', tag: '<area alt="Texto alternativo" coords="x1,y1,x2,y2" href="URL" shape="rect">', description: 'Define un área dentro de un mapa de imagen' },
    { symbol: 'audio', tag: '<audio src="URL" controls autoplay></audio>', description: 'Define contenido de sonido' },
    { symbol: 'base', tag: '<base href="URL">', description: 'Especifica la base donde se abrirán todas las URL del documento' },
    { symbol: 'bdi', tag: '<bdi dir="ltr">Texto bidireccional</bdi>', description: 'Aisla una parte del texto que puede tener un formato diferente del texto externo' },
    { symbol: 'bdo', tag: '<bdo dir="rtl">Texto sobrescrito o subrayado</bdo>', description: 'Sobreescribe la dirección del texto' },
    { symbol: 'br', tag: '<br/>', description: 'Define un salto de línea' },
    { symbol: 'button', tag: '<button type="submit" name="boton_nombre" value="Valor del botón">Texto del botón</button>', description: 'Define un botón clickeable' },
    { symbol: 'caption', tag: '<caption>Descripción de la tabla</caption>', description: 'Define el título de una tabla' },
    { symbol: 'canvas', tag: '<canvas width="400" height="200"></canvas>', description: 'Se usa para dibujar gráficos en pantalla' },
    { symbol: 'code', tag: '<code>Código de ejemplo</code>', description: 'Define un trozo de código de programación' },
    { symbol: 'colgroup', tag: '<colgroup span="2"></colgroup>', description: 'Especifica un grupo de una o más columnas de una tabla' },
    { symbol: 'command', tag: '<command type="command" label="Comando"></command>', description: 'Define un botón command al que un usuario puede invocar' },
    { symbol: 'datalist', tag: '<datalist><option value="Opción 1"><option value="Opción 2"></datalist>', description: 'Especifica en un imput una lista pre-definida de opciones' },
    { symbol: 'dd', tag: '<dd>Definición en lista definida</dd>', description: 'Define la descripción de un item en una lista de definición' },
    { symbol: 'del', tag: '<del cite="URL_de_descripción" datetime="2023-10-04T12:00:00Z">Texto eliminado</del>', description: 'Define un texto que ha sido definido en un Mdocument' },
    { symbol: 'details', tag: '<details open><summary>Resumen del detalle</summary>Contenido detallado</details>', description: 'DEfine detalles adicionales que el usuario puede ver o esconder' },
    { symbol: 'dfn', tag: '<dfn>Término definido</dfn>', description: 'Define el término de una definición' },

    { symbol: 'dialog', tag: '<dialog open>Contenido del cuadro de diálogo</dialog>', description: 'Define una caja o ventana de diálogo' },
    { symbol: 'dl', tag: '<dl><dt></dt></dl>', description: 'Define una lista de definición' },
    { symbol: 'dt', tag: '<dt></dt>', description: 'Define un término (item) en una lista de definición' },
    { symbol: 'figcaption', tag: '<figcaption>Descripción de la figura</figcaption>', description: 'Define el título para una figura <figure>' },
    { symbol: 'figure', tag: '<figure><img src="imagen.jpg" alt="Descripción de la imagen"></figure>', description: 'Especifica auto-contenido' },
    { symbol: 'hgroup', tag: '<hgroup><hgroup><h1>Título principal</h1><h2>Subtítulo</h2></hgroup></hgroup>', description: 'Grupo de encabezado (<h1> a <h6>)' },
    { symbol: 'hr', tag: '<hr size="2" width="50%" noshade>', description: 'Define un cambio de temática a partir de una línea dibujada' },
    { symbol: 'h1', tag: '<h1>Título</h1>', description: 'Encabezado 1' },
    { symbol: 'html', tag: '<html></html>', description: 'Define la raíz del documento' },
    { symbol: 'i', tag: '<i>Texto en cursiva</i>', description: 'Define una parte del texto de modo alternativo' },
    { symbol: 'iframe', tag: '<iframe src="pagina.html" width="500" height="300" frameborder="0"></iframe>', description: 'Define un frame en línea' },
    { symbol: 'ins', tag: '<ins cite="URL_de_descripcion" datetime="2023-10-04T12:00:00Z"></ins>', description: 'Define texto que ha sido insertado en un documento' },
    { symbol: 'kbody', tag: '<kbd>Tecla presionada</kbd>', description: 'Define entrada del teclado' },
    { symbol: 'keygen', tag: '<keygen name="clave_generada" challenge="desafio" keytype="RSA">', description: 'Define un campo generador de claves para formularios' },
    { symbol: 'legend', tag: '<legend>Descripción del campo de formulario</legend>', description: 'Define un título para los elementos <fieldset>, <figure>, <details>' },
    { symbol: 'li', tag: '<li value="1">Elemento de lista 1</li>', description: 'Define un item de una lista' },
    { symbol: 'map', tag: '<map name="mapa_imagenes"></map>', description: 'Define un mapa de imagen del cliente' },
    { symbol: 'menu', tag: '<menu type="context"></menu>', description: 'Define la lista de un menú' },
    { symbol: 'meter', tag: '<meter value="70" min="0" max="100">70%</meter>', description: 'Define una medida escalar en un rango conocido' },

    { symbol: 'noscript', tag: '<noscript></noscript>', description: 'Define un contenido alternativo para los usuarios que no soportan scripts del cliente' },
    { symbol: 'object', tag: '<object data="archivo.obj" type="tipo/mime" width="300" height="200"></object>', description: 'Define un objeto embebido' },
    { symbol: 'optgroup', tag: '<optgroup label="Grupo"></optgroup>', description: 'Define un grupo de opciones relacionadas en una lista desplegable' },
    { symbol: 'output', tag: '<output for="inputId"></output>', description: 'Define el resultado de un cálculo' },
    { symbol: 'param', tag: '<param name="nombre_parametro" value="valor_del_parametro">', description: 'Define un parámetro para un objeto' },
    { symbol: 'pre', tag: '<pre></pre>', description: 'Define un texto pre-formateado' },
    { symbol: 'progress', tag: '<progress value="70" max="100"></progress>', description: 'Representa el progeso de una tarea en una barra' },
    { symbol: 'q', tag: '<q></q>', description: 'Define una cita corta' },
    { symbol: 'rp', tag: '<rp></rp>', description: 'Define que debe mostrar en navegadores que no soportan scripts de ruby' },
    { symbol: 'rt', tag: '<rt></rt>', description: 'Define una pronunciación de caracteres' },
    { symbol: 'ruby', tag: '<ruby><rb></rb></ruby>', description: 'Define una notación de ruby' },
    { symbol: 'samp', tag: '<samp></samp>', description: 'Define un ejemplo de salida de un programa' },
    { symbol: 'script', tag: '<script src="script.js"></script>', description: 'Define un script del lado del cliente' },
    { symbol: 'source', tag: '<source id=""></source>', description: 'Define los recursos para elementos multimedia' },
    { symbol: 'sub', tag: '<sub></sub>', description: 'Define un texto que es subíndice' },
    { symbol: 'summary', tag: '<summary id=""></summary>', description: 'Define un encabezado visible para el elemento <details>' },
    { symbol: 'sup', tag: '<sup id=""></sup>', description: 'Define un texto que es superíndice' },
    { symbol: 'thead', tag: '<thead id=""></thead>', description: 'Agrupa los encabezados de una tabla' },
    { symbol: 'time', tag: '<time datetime="2023-10-04T12:00:00Z"></time>', description: 'Define fecha/hora' },

    { symbol: 'ul', tag: '<ul><li></li></ul>', description: 'Define una lista desordenada' },
    { symbol: 'var', tag: '<var></var>', description: 'Define una variable' },
    { symbol: 'wbr', tag: '<wbr></wbr>', description: 'Define un posible salto de línea' }

  ]

  useEffect(() => {
    const menuItemsForTribute = menuItems.map((item) => ({
      trigger: '<',
      values: [item.tag],
      lookup: 'tag'
    }))

    tributeRef.current = new Tribute({
      collection: menuItemsForTribute,
      selectTemplate: function (item) {
        return item.original.tag
      }
    })

    const textarea = textareaRef.current
    tributeRef.current.attach(textarea)

    textarea.addEventListener('keydown', (event) => {
      if (event.key === '<') {
        const currentHtml = textarea.value
        const lastOpenTagIndex = currentHtml.lastIndexOf('<')
        const textAfterLastOpenTag = currentHtml.slice(lastOpenTagIndex)

        const filteredItems = menuItems.filter((item) =>
          item.tag.startsWith(textAfterLastOpenTag)
        )

        tributeRef.current.append(0, filteredItems)
      }
    })

    return () => {
      tributeRef.current.detach(textarea)
    }
  }, []) // Se ejecutará solo una vez después del montaje inicial

  const handleTagSelection = (tag) => {
    const currentHtml = html
    const cursorPosition = textareaRef.current.selectionStart
    const newHtml =
        currentHtml.slice(0, cursorPosition) +
        tag +
        currentHtml.slice(cursorPosition)
    setHtml(newHtml)
    setEditorValue(createEmptyValue().setContentFromString(newHtml, 'html'))
    setSelectedTag(tag)
  }

  const fontOptions = [
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Times New Roman', value: 'Times New Roman, serif' },
    { label: 'Courier New', value: 'Courier New, monospace' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Georgia', value: 'Georgia, serif' }
  ]

  return (
    <div>
      <h1>Editor HTML</h1>
      {selectedTag && (
        <div>
          <h2>Descripción:</h2>
          <p>
            <strong>{selectedTag}</strong>: {menuItems.find((item) => item.tag === selectedTag)?.description}
          </p>
        </div>
      )}
      <div className='boton-html-container'>
        {menuItems.map((item, index) => (
          <button className='boton-html'
            key={index}
            onClick={() => handleTagSelection(item.tag)}
            style={{ marginRight: '5px' }}
          >
            {item.symbol}
          </button>
        ))}
      </div>
      <div>
        <textarea
          ref={textareaRef}
          id='html-textarea'
          placeholder='Ingresa etiquetas HTML aquí'
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          style={{ width: '100%', height: '200px' }}
          className='textarea'
        />
        <h2>Resultado HTML:</h2>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            maxHeight: '400px',
            overflowY: 'scroll'
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
