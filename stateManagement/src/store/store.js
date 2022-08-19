import { reducer } from "./reducer.js";
import cloneDeepObject from "../utils/cloneDeepObject.js";

const createStore = (reducer) => {
  const listeners = [];
  let state = reducer();

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const publish = () => {
    const payload = freeze(state);
    listeners.forEach((listener) => listener(payload));
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);
    state = newState;
    publish();
  };

  const getState = () => {
    return freeze(state);
  };

  return {
    subscribe,
    publish,
    dispatch,
    getState,
  };
};

const freeze = (state) => Object.freeze(cloneDeepObject(state));

export const store = createStore(reducer);
