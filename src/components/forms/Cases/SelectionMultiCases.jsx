import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  {name:'Oliver Hansen',id:1},
  {name:'Van Henry',id:20},
  {name:'April Tucker',id:20},
  {name:'Ralph Hubbard',id:40},
  {name:'Omar Alexander',id:41},
  {name:'Carlos Abbott',id:60},
  {name:'Miriam Wagner',id:70},
  {name:'Bradley Wilkerson',id:80},
  {name:'Virginia Andrews',id:90},
  {name:'Kelly Snyder',id:100}
];

function getStyles(name, caseName, theme) {
  return {
    fontWeight:
      caseName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectionMultiCases({cases_list}) {
  const theme = useTheme();
  const [caseName, setCaseName] = React.useState([]);
  const [caseId, setCaseId] = React.useState([]);

  useEffect(() => {
    // console.log("caseName:",caseName)
    // console.log("caseId:",caseId)
  }, [caseName])
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(event)

    setCaseName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setCaseId(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={caseName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {console.log(selected)}
              {selected.map((elem) => (
                <Chip key={elem.id} label={elem.name} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {/* {cases_list.map((elem,index) => ( */}
          {cases_list.map((elem,index) => (
            <MenuItem
              key={index}
              value={elem}
              style={getStyles(elem, caseName, theme)}
            >
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}