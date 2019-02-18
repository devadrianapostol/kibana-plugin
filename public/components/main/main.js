import React from 'react';
import { getVisualizeLoader } from 'ui/visualize/loader';
import { HashRouter, Route, Link } from 'react-router-dom';
import  Home  from './home';
import Next from './next';

import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText
} from '@elastic/eui';



export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
  }
  render() {
    const { httpClient } = this.props;

    const homeroute = (props) => {
      return (
        <Home httpClient={httpClient}  props={props} />
      );
    };
    const nextrooute= (props) => {
      return (
        <Next httpClient={httpClient} match={props.match}  />
      );
    };

    return (
      <HashRouter basename="/">
        <div>
          <Link to="/"/>
          <Link to="/indexes/"/>

          <Route path="/" render={homeroute} />
          <Route path="/indexes/:id" render={nextrooute} />
        </div>
      </HashRouter>

    );
  }
}
