import {observable, action, makeObservable} from 'mobx';

class CounterStore {
  count: number = 0;
  constructor() {
    makeObservable(this, {
      count: observable,
      incrementCount: action,
      decrementCount: action,
    });
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    this.count--;
  }
}

export default CounterStore;
