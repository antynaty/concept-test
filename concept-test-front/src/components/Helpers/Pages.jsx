import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

const useStyles = makeStyles(theme => ({
  buttonPage: {
    paddingTop: 14,
    paddingBottom: 14,
  },
}));

const Pages = () => {
  // const page = useSelector(state => state.page.page);
  const nextPage = useSelector(state => state.page.nextPage);
  const prevPage = useSelector(state => state.page.prevPage);
  const dispatch = useDispatch();
  const classes = useStyles();



  return (
    <div className={classes.buttonPage}>
      {prevPage ? <Button onClick={() => dispatch(decrement(1))}>Anterior</Button> : <Button disabled={true}>Anterior</Button>}
      {nextPage ? <Button onClick={() => dispatch(increment(1))}>Siguiente</Button > : <Button disabled={true}>Siguiente</Button>}
    </div>
  );
}

export default Pages;