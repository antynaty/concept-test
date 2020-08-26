import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, 
}));

const CharGrid = () => {
  const classes = useStyles();
  const charSelected = useSelector(state => state.fetchCharSelected.charSelected); 
  
  return (
    <Paper className={classes.paper}>
      <Typography variant="subtitle1" gutterBottom> Selecciona un personaje</Typography>
      <p>Nombre         : {charSelected.name}</p>
      <p>Estatura       : {charSelected.height}</p>
      <p>Genero         : {charSelected.gender}</p>
      <p>Nombre Planeta : {charSelected.homeworld}</p>
      <p>Poblacion total: {charSelected.population}</p>
    </Paper>
  )
}

export default CharGrid;