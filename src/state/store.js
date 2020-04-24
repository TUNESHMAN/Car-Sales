import { createStore, combineReducers } from "redux";
import { carReducer, additionalFeatureReducer, additionalCostReducer } from "./Reducer";

const mainReducer = combineReducers({
  car: carReducer,
  additionalFeature: additionalFeatureReducer,
  additionalCost: additionalCostReducer
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;

const store = createStore(mainReducer, {});

export default store;
