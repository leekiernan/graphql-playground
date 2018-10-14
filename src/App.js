import React, { Component } from 'react';
import PropTypes from 'prop-types';

import API from './service/API'
import LinkStore from './stores/LinkStore'
import './App.css';

const Link = ({title, url}) => (
  <li><a href={url}>{title}</a></li>
)

class App extends Component {
  getLinks() {
    return { links: LinkStore.getAll() }
  }

  state = this.getLinks()

  static propTypes = {
    limit: PropTypes.number
  }

  static defaultProps = {
    limit: 3
  }

  onChange = () => {
    console.log('4. In view')
    this.setState(this.getLinks())
  }

  componentWillMount() {
    API.fetchLinks()
    LinkStore.on('change', this.onChange)
  }
  componentWillUnmount() {
    LinkStore.removeListener('change', this.onChange)
  }

  render() {
    let links = this.state.links.map( (link,i) => <Link key={i} url={link.url} title={link.title} /> )
    return (
      <ul className="App">
        {links}
      </ul>
    )
  }
}

export default App
