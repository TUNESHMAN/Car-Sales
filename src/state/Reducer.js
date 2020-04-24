import { ADD_FEATURE, BUY_ITEM, REMOVE_FEATURE } from "./types";

const initialState = {
  additionalCosts: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export function carReducer(car = initialState.car, action) {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...car,
        features: [...car.features, action.payload.feature],
      };
    case REMOVE_FEATURE:
      return {
        ...car,
        features: [
          ...car.features.filter((fil) => {
            fil.id !== action.payload.feature.id;
          }),
        ],
      };

    default:
      return car;
  }
}

export function additionalFeatureReducer(
  additionalFeatures = initialState.additionalFeatures,
  action
) {
  switch (action.type) {
    case ADD_FEATURE:
      break;

    default:
      return state;
  }
}

export function additionalCostReducer(
  additionalCosts = initialState.additionalCosts,
  action
) {}
