import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

type SearchBarProps = {
  options: Array<any>;
  label: string;
  getOptionLabel: (arg0: any) => string;
  setQuery: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  options,
  label,
  getOptionLabel = option => option,
  setQuery
}) => (
  <Autocomplete
    // freeSolo
    onChange={(event, value) => setQuery(value)}
    options={options}
    getOptionLabel={getOptionLabel}
    renderInput={(params) => (
      <TextField 
        {...params}
        placeholder={label}
        margin="normal" 
        variant="outlined"
        InputLabelProps={{
          shrink: false,
        }}
        InputProps={{
          ...params.InputProps,
          // startAdornment: params.InputProps.startAdornment
          startAdornment: 
          <InputAdornment position="start">
            <SearchIcon style={{marginLeft: 5, color: "#d9d9d9"}} />
          </InputAdornment> 
        }}
      />
    )}
  />
);

export default SearchBar;
