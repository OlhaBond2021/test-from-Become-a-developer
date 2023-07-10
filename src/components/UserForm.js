import { useState } from "react";

import Button from "./Button";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onCheckText(enteredValue);
    // setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${!isValid && classes.invalid}`}
      >
        <label htmlFor="text">Input some text</label>
        <input
          type="text"
          id="text"
          value={enteredValue}
          onChange={inputChangeHandler}
        />
      </div>
      <Button type="submit">Find Unique Character</Button>
    </form>
  );
};

export default UserForm;
