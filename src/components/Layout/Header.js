import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsimage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showCartPointer={props.showCartPointer} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimage} alt="foods on table" />
      </div>
    </Fragment>
  );
};

export default Header;
