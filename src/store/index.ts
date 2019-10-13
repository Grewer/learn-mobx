import { action, computed, observable } from "mobx";

class mainStore {
  @observable firstState = 0;
  @action onClick = (num) => {
    console.log('触发了action')
    this.firstState += num
  }

  @computed get firstStateChange() { // 不加computed 也可以  加了之后又类似缓存的性能提升
    return this.firstState * 0.01
  }
}

const newStore = new mainStore();

export default newStore;
