import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../state/Action";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buyItem}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (car) => {
  return {
    addedFeature: car.features,
  };
};

export default connect(mapStateToProps, buyItem)(AdditionalFeature);
