import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component<any> {
  constructor(props) {
    super(props);
    console.log(this.props);
  }


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const store = this.props.store;
    return <div>
      app
      <span>{store.firstState}</span>
      <button onClick={() => store.onClick(123)}>change Value</button>
    </div>
  }
}

export default App;
