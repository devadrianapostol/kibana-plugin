import React from 'react';

import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiBasicTable,
  EuiText
} from '@elastic/eui';

export default class Next extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {


  }

  render() {
    const { title } = this.props;
    const { id } = this.props.match.params.id;
    const { httpClient } = this.props;
    const { id } = this.props.match.params.id;
    httpClient.get(`../api/ady/index/${id}`).then((resp) => {
      console.log(resp);
    });
    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>{ id }</h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>{ this.props.match.params.id }</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>This is the second view</h3>
                <a href="#back">Back</a>
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}