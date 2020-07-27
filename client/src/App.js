import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Container, Grid, TextField } from '@material-ui/core';

import './App.css';

import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';

import FormProducts from './Components/Forms/Form'
import TableProducts from './Components/Tables/TableProducts'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: amber[500],
    },
  },
});


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: '100%',
    padding: '0 30px',
    marginTop: '1em',
    marginBottom: '1em'
  },

  cabeca: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="App">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6}  className={classes.root}>
          <h1 color="primary" >Dedé Custos</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
          {/* <FormProducts /> */}
          <TableProducts title={'Produtos'} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
