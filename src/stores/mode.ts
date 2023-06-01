import {observable, action, makeObservable} from 'mobx';

class ModeStore {
  mode: 'dark' | 'light' = 'light';
  constructor() {
    makeObservable(this, {
      mode: observable,
      setMode: action,
    });
  }
  setMode(v: 'dark' | 'light') {
    this.mode = v;
  }
}

export default ModeStore;
