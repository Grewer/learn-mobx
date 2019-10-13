import React from 'react';
import './App.css';
import { observer } from 'mobx-react';
import newStore from "./store";

@observer
class App extends React.Component<any> {
  constructor(props) {
    super(props);
    console.log(newStore);
  }


  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div>
      app
      <span>{newStore.firstState}</span>
      <button onClick={() => newStore.onClick(123)}>change Value</button>
    </div>
  }
}

export default App;
