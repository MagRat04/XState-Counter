import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '../card/';
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles/';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}> 
      <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
        <Grid item xs={2} lg={1}>
          <Card />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
