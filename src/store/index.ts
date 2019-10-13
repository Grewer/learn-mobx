import { action, observable } from "mobx";

class mainStore {
  @observable firstState = 0;
  @action onClick = (num) => {
    console.log('触发了action')
    this.firstState+=num
  }
}

const newStore = new mainStore();

export default newStore;
