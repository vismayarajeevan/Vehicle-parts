
import React from "react";
OverallView
import { useLocation } from "react-router-dom";
import OverallView from "../reusablecomponents/OverallView";

const ChoicesView = () => {
  const location = useLocation();
  const { parts } = location.state || { parts: [] }; // Retrieve parts from state

  return <OverallView items={parts} title="Your Choices" />;
};
export default ChoicesView;