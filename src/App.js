import { useState } from "react";

import classes from "./App.module.css";
import UserForm from "./components/UserForm";
import ResultOutput from "./components/ResultOutput";

const App = () => {
  const [userTextInput, setUserTextInput] = useState([]);

  let uniqueChars = [];
  let uniqueChar = "";

  const checkTextHandler = (userText) => {

    console.log(userText);

    const words = userText.toLowerCase().split(" ");
    for (let word of words) {
      const charCount = {};

      for (let char of word) {
        if (/[a-zA-Z]/.test(char)) {
          charCount[char] = (charCount[char] || 0) + 1;
        }
      }
      // console.log(charCount);

      for (let char of word) {
        if (/[a-zA-Z]/.test(char) && charCount[char] === 1) {
          uniqueChars.push(char);
          break;
        }
      }
    }
    console.log(uniqueChars);

    const charCountSecond = {};

    for (let char of uniqueChars) {
        charCountSecond[char] = (charCountSecond[char] || 0) + 1;
    }
    console.log(charCountSecond);

    for (let char of uniqueChars) {
      if (charCountSecond[char] === 1) {
        uniqueChar += char;
        break;
      }
    }
    console.log(uniqueChar);
    // return uniqueChar;
    setUserTextInput(() => {
      return uniqueChar;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No result! Entered some text!</p>
  );

  if (userTextInput.length > 0) {
    console.log("App/if ...");
    content = (
      <ResultOutput item={userTextInput} />
    );
  }

  return (
    <div>
      <section className={classes["user-input"]}>
        <UserForm onCheckText={checkTextHandler} />
      </section>
      <section className={classes.result}>{content}</section>
    </div>
  );
};

export default App;
