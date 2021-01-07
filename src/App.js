import React, { Component } from 'react';
import CalorieTracker from './containers/CalorieTracker/CalorieTracker';
import Layout from './hoc/Layout/Layout';



class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <CalorieTracker/>
        </Layout>
      </div>
    );
  }
}

export default App;
