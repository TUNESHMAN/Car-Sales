import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../state/Action";

const AddedFeature = (props) => {
  console.log(props.features);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={props.removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (car) => {
  return {
    remove: car.features,
  };
};

export default connect(mapStateToProps, removeFeature)(AddedFeature);
