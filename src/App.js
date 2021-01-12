import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CalorieTracker from './containers/CalorieTracker/CalorieTracker';
import Confirmation from './containers/Confirmation/Confirmation';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
// import Layout from './hoc/Layout/Layout';



class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/" exact component={CalorieTracker} />
          <Route path="/confirmation" component={Confirmation} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
