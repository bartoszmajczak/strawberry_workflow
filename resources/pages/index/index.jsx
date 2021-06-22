import React, { Component } from 'react';

import Button from './../../components/button/button.jsx';
import Pragraph from './../../components/paragraph/paragraph.jsx';

import './index.sass';

class Index extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    document.title = 'index';
  }

  componentDidMount() {
    console.log('hello world');
  }

  render() {
    let increase = () => {
      this.setState({
        count: this.state.count + 1
      });
    }

    return (
      <section className="wrapper wrapper--center wrapper--vertical-height">
        <Pragraph className="paragraph--green paragraph--margin-right" value={this.state.count} />
        <Button className="button--green" onClick={increase} />
      </section>
    );
  }
}

export default Index;