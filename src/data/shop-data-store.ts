import { createStore, Store } from 'redux';
import { ShopReducer } from './shop-reducer';
import { Action } from './action';

export const ShopDataStore: Store<any, Action<any>> = createStore(ShopReducer.reduce);