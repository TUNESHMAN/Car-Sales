import { BUY_ITEM, REMOVE_FEATURE, ADD_FEATURE } from "./types";

export const buyItem = (feature) => (dispatch) => {
  return {
    type: ADD_FEATURE,
    payload: { feature },
  };
};

export const removeFeature = (feature) => (dispatch) => {
  return {
    type: REMOVE_FEATURE,
    payload: { feature },
  };
};
