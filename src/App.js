import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {DocumentPokedex} from "./features/document/documentPokedex";
import {DocumentFavoris} from "./features/document/documentFavoris";
import {DocumentHome} from "./features/document/documentHome";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  typo: {
    margin: 10
  },
});

function App() {

  const classes = useStyles();

  return (
      <Router>
        <AppBar position={"static"}>
          <Toolbar>
            <Typography className={classes.typo} variant={"h5"} component={"h5"}>
              <Link style={{textDecoration:'none', color:'inherit'}} className={classes.link} to={"/"}>Accueil</Link>
            </Typography>
            <Typography className={classes.typo} variant={"h5"} component={"h5"}>
              <Link style={{textDecoration:'none', color:'inherit'}} to={"/search"}>Pokédex</Link>
            </Typography>
            <Typography className={classes.typo} variant={"h5"} component={"h5"}>
              <Link style={{textDecoration:'none', color:'inherit'}} to={"/favoris"}>Favoris</Link>
            </Typography>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/search">
            <DocumentPokedex/>
          </Route>
          <Route path="/favoris">
            <DocumentFavoris/>
          </Route>
          <Route path="/">
            <DocumentHome/>
          </Route>
        </Switch>

      </Router>
  );
}

export default App;
