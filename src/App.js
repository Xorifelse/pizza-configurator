import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import HomeContainer from './components/HomeContainer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomeContainer} />

              <Route component={() => (<Redirect to="/" />)} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
