import classes from "./MeetupDetail.module.css";
import { Fragment } from "react";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img alt={props.title} src={props.image}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
