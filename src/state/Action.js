import { BUY_ITEM, REMOVE_FEATURE, INCREMENT } from "./types";

export const buyItem = (feature) => (dispatch) => {
  return {
    type: BUY_ITEM,
    payload: { feature },
  };
};

export const removeFeature = (feature) => (dispatch) => {
  return {
    type: REMOVE_FEATURE,
    payload: { feature },
  };
};

export const increaseCost = () => (dispatch) => {
  return {
    type: INCREMENT,
  };
};
