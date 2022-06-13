import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlithed, setBtnIsHighlithed] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnIsHighlithed ? classes.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlithed(true);
    const timer = setTimeout(() => {
      setBtnIsHighlithed(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
