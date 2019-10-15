import * as React from 'react';
import { inject, observer } from "mobx-react";


@inject('store')
@observer
class AsyncFetchTest extends React.PureComponent<any> {
  public render() {
    console.log(this.props)
    return (<div>AsyncFetchTest:
      <div>
        {this.props.store.loading ? 'loading...' : 'show...'}
      </div>
      <button onClick={this.props.store.asyncChange}>changeLoading</button>
      <h3>
        test2
      </h3>
      <div>
        {this.props.store.a}
      </div>
      <button onClick={this.props.store.asyncChange2}>changeLoading</button>
    </div>);
  }
}

export default AsyncFetchTest
