import { action, computed, observable } from "mobx";


class mainStore {
  @observable firstState = 0;
  @observable loading = false;
  @observable a = 1;


  @action onClick = (num) => {
    console.log('触发了action')
    this.firstState += num
  }

  @computed get firstStateChange() { // 不加computed 也可以  加了之后有类似缓存的性能提升
    return this.firstState * 0.01
  }

  @action asyncChange = async () => {
    console.log('asyncChange trigger')
    this.loading = true;

    const fetch = (num: number): Promise<number> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(num)
        }, 1000)
      })
    }

    const num = await fetch(123);
    console.log('finish async fetch', num);
    this.firstState = num;
    this.loading = false;
  }


  @action.bound
  changeB() {
    this.a = 1000;
    // 如果不加action.bound 则无法改变
  }

  @action asyncChange2 = async () => {
    console.log('asyncChange trigger2')
    setTimeout(this.changeB, 1000);
  }

}

const newStore = new mainStore();

export default newStore;
