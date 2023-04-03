import {createContext} from 'react';
import CounterStore from './counterStore';
import {spy} from 'mobx';
import {createMobxDebugger} from 'mobx-flipper';

interface Store {
  counterStore: CounterStore;
}

export const store: Store = {
  counterStore: new CounterStore(),
};
if (__DEV__) {
  //@ts-ignore
  spy(createMobxDebugger(store));
}
export const StoreContext = createContext(store);
