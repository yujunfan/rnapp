import {createContext} from 'react';
import CounterStore from './counterStore';
import ModeStore from './mode';
import {spy} from 'mobx';
import {createMobxDebugger} from 'mobx-flipper';

interface Store {
  counterStore: CounterStore;
  modeStore: ModeStore;
}

export const store: Store = {
  counterStore: new CounterStore(),
  modeStore: new ModeStore(),
};
if (__DEV__) {
  //@ts-ignore
  spy(createMobxDebugger(store));
}
export const StoreContext = createContext(store);
