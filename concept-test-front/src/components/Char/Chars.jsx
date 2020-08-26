import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, TextField, Button, Typography } from '@material-ui/core';

import { fetchChars, fetchCharSelected } from '../../actions';

import CharGrid from './CharGrid';
import './chars.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 12
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    alignItems: 'center',
    padding: theme.spacing(7, 5),
    color: 'white'
  },
  input: {
    color: "black",
    backgroundColor: "white"
  },
  buttonPage: {
    paddingTop: 14,
    paddingBottom: 14,
  },
  table: {
    minWidth: 100,
  },
}));

const Char = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  
  const page = useSelector(state => state.page.page);
  const chars = useSelector(state => state.fetchChars.chars); 
  const dispatch = useDispatch();

  const filteredChar = chars.filter(char => {
    return char.name.toLowerCase().includes(filter.toLowerCase())
  });

  useEffect(() => {
    dispatch(fetchChars(page)); 
  }, [page])

  const fetchChar = async (event, idChar) => {
    event.preventDefault(); 
    dispatch(fetchCharSelected(idChar));
  }
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TextField type="text" placeholder="Filtra tu búsqueda" onChange={event => setFilter(event.target.value)} variant="outlined" InputProps={{
          className: classes.input
        }} />
      </div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          {
            chars ?
              filteredChar.map(char => (
                <Paper className={classes.paper} key={char._id}>
                  <div className="paper-container">
                    <Typography><font color="#b4a500">{char.name}</font></Typography>
                    <Button onClick={event => { fetchChar(event, char._id) }}>Ver</Button>
                  </div>
                </Paper>
              ))
              : <p>Loading Chars...</p>
          }
        </Grid>
        <Grid item xs={6}> 
          <CharGrid/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Char;