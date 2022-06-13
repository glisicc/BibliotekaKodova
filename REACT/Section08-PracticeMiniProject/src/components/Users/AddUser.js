import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age!",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)!",
      });
      //cnvert into number +
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  // const usernameChangehandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangehandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          ref={nameInputRef}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/*for is htmlfotr in XML*/}
          <input
            id="username"
            type="text"
            // onChange={usernameChangehandler}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>{" "}
          {/*//for is htmlfotr in XML*/}
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangehandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
