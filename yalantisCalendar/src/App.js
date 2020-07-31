import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Users from "./components/users/Users";
import Months from "./components/calendar/Months";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3a3535",
    height: "100vh",
    overflow: "hidden",
    overflowY: "scroll",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Birthday Calendar
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Months />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Users />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default App;
