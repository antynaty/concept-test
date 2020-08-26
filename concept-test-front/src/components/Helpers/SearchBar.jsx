import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  content: {
    alignItems: 'center',
    padding: theme.spacing(7, 5),
    color: 'white'
  },
  input: {
    color: "black",
    backgroundColor: "white"
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const chars = useSelector(state => state.chars);
  // const filteredChar = chars.filter(char => {
  //   return char.name.toLowerCase().includes(filter.toLowerCase())
  // });
  return (
    <div className={classes.content}>
      <TextField
        type="text"
        placeholder="Filtra tu búsqueda"
        onChange={event => setFilter(event.target.value)}
        variant="outlined"
        InputProps={{
          className: classes.input
        }} />
    </div>
  )
}

export default SearchBar;