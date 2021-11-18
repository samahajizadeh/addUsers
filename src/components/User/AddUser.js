import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUser: "",
    enteredAge: "",
  });

  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
  
    setUserInput((preveState) => {
      return { ...preveState, enteredUser: event.target.value };
    });
  };

  const ageHandler = (event) => {
  
    setUserInput((preveState) => {
      return { ...preveState, enteredAge: event.target.value };
    });
  };

  const addUser = (event) => {
    event.preventDefault();

    if (
      userInput.enteredUser.trim().length === 0 ||
      userInput.enteredAge.trim().length === 0
    ) {
      setError({
        title:'InValid Input',
        message:'please enter a valid input'
      });

      return;
    }

    if (parseInt(userInput.enteredAge) < 1) {
      setError({
        title:'InValid Age',
        message:'please enter a valid age'
      });
      return;
    }    

    const userData = {
      name: userInput.enteredUser,
      age: userInput.enteredAge,
      id: Math.random().toString(),
    };

    props.onSaveUser(userData);
    setUserInput({
      enteredUser: "",
      enteredAge: "",
    });
  };

  const errorHandler =()=>{
    setError(null)
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={userInput.enteredUser}
            onChange={addUserHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={userInput.enteredAge}
            onChange={ageHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUser;
