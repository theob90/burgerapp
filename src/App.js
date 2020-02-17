import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>

      </div>
    );
  }
}

export default App;

