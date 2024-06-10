import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { CloseFullscreen, CopyAll, HourglassEmpty } from '@mui/icons-material'
import { Controlled as ControlledEditor } from 'react-codemirror2'
// import { SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import './App.css'
import { useState } from 'react'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
// import { Typography, Button } from "@mui/material";
const Head = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;

  flex-grow: 0.1;
  align-items: center;
  justify-content: space-between;
`
const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  color: #aaaebc;
  font-weight: 700;
`
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`
function Editor ({ heading, language, value, onChange, color }) {
  const [open, setOpen] = useState(true)

  const handleChange = (editor, data, value) => {
    onChange(value)
  }
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Head>
          {/* {heading === 'HTML' && <SiHtml5 size={25} color='#E44D27' />}
          {heading === 'CSS' && <SiCss3 size={25} color='#1F8FE7' />}
          {heading === 'JS' && <SiJavascript size={25} color='yellow' />} */}

          {heading === 'HTML' && <HtmlIcon size={25} color='#E44D27' />}
          {heading === 'CSS' && <CssIcon size={25} color='#1F8FE7' />}
          {heading === 'JS' && <JavascriptIcon size={25} color='yellow' />}

          {heading}

          <CopyAll
            fontSize='small'
            style={{ alignSelf: 'center' }}
            onClick={() => {
              navigator.clipboard.writeText(value)
            }}
          />
          <CloseFullscreen
            fontSize='small'
            style={{ alignSelf: 'center' }}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </Head>
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='controlled-editor'
        fontSize='2rem'
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
          smartIndent: true,
		  autocorrect: true
        }}

      />
    </Container>
  )
}

export default Editor
