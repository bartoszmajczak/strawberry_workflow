import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Index from './pages/index/index.jsx';

import './sass/index.sass';

class Application extends Component {
  render() {
    return (
      <Index />
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('application'));