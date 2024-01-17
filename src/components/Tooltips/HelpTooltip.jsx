import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    fontSize: '18px', // Modificar el tamaño de la fuente según tus necesidades
    backgroundColor: '#000', // Modificar el color de fondo según tus necesidades
    // Puedes agregar más estilos aquí según tus necesidades
  },
});

export default function HelpTooltip({ text }) {
  return (
    <div>
      <CustomWidthTooltip title={text}>
        <HelpIcon />
      </CustomWidthTooltip>
    </div>
  );
}
