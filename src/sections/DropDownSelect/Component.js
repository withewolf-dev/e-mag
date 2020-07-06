import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import {BootstrapInput} from './styles'
//import {useStyles} from './styles'

export default function CustomizedSelects() {
 // const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
       <InputLabel htmlFor="demo-customized-select-native">Issue</InputLabel>
      <FormControl>
       
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value='' />
          <option value={10}>july</option>
          <option value={20}>september</option>
          <option value={30}>November</option>
        </NativeSelect>
        
      </FormControl>
    </div>
  );
}
