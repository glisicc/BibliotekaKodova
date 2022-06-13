import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {
        props.children /*u div upisujemo sve elemente koji se u elementu koji nasledjuje njega nalaze */
      }
    </div> /*dodeljujemo joj css od csr modula ali i css klase koje dolaze eksterno kroz props*/
  );
};

export default Card;
