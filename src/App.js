import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import makeStyles from '@material-ui/styles/makeStyles';
import AuthRoute from './util/AuthRoute';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
import theme from './theme';
import Navbar from './components/Navbar';
import restaurants from './pages/restaurants';
import signup from './pages/signup';
import login from './pages/login';


const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  mainContent: {
    marginTop: 64
  }
}));

const history = createBrowserHistory();
let authenticated = false;


const App = () => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className={classes.root}>
          <Router history={history} >
            <Navbar
              authenticated={authenticated}
            />
            <div className={classes.mainContent}>
              <Switch>
                <Route exact path="/" component={restaurants} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
