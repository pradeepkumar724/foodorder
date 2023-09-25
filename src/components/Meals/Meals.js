import React, { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailbleMeals from "./AvailbleMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailbleMeals />
    </Fragment>
  );
};

export default Meals;
