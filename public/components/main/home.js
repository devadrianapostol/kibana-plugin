import React from 'react';

import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiButton,
  EuiBasicTable
} from '@elastic/eui';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;

    const { title } = this.props;

    if('undefined' !== typeof httpClient  ){
      httpClient.get('../api/ady/example').then((resp) => {
        this.setState({indices: resp.data});
      });

      httpClient.get('../api/ady/nou').then((resp) =>{
        this.setState({ time: resp.data.time });
      }).catch((e) => {
        console.error(e);
      });
    }

  }
  render() {
    const { title } = this.props;
    let items = [];

    if(this.state.indices){
      const indices = this.state.indices.indices;
      items = Object.keys(this.state.indices.indices).map((id) => {
        return { id: id, name: id, state: indices[id].state};
      });

    }

    const columns = [{
      field: 'name',
      name: 'cluster name',
      sortable: true,
      hideForMobile: true,
      'data-test-subj': 'firstNameCell',
    }, {
      field: 'state',
      name: 'cluster state',
      sortable: true,
      hideForMobile: true,
      //'data-test-subj': 'firstNameCell',
    }
    ];

    const getRowProps = (item) => {
      const { id } = item;
      return {
        'data-test-subj': `row-${id}`,
        className: 'customRowClass',
        onClick: () => {
          document.location.hash = `/indexes/${id}`;
        },

      };
    };

    const getCellProps = (item, column) => {
      const { id } = item;
      const { field } = column;
      return {
        className: 'customCellClass',
        'data-test-subj': `cell-${id}-${field}`,
        textOnly: true,
      };
    };

    return (
      <EuiPage>
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
              <h1>{title} Hello World!</h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiTitle>
                <h2>Congratulations</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiText>
                <h3>You have successfully created your first Kibana Plugin!</h3>
                <p>The server time (via API call) is {this.state.time || 'NO API CALL YET'}</p>
                <EuiBasicTable
                  items={items}
                  columns={columns}
                  rowProps={getRowProps}
                  cellProps={getCellProps}
                />
                <br />
              </EuiText>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}