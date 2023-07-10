import classes from "./ResultOutput.module.css";

const ResultOutput = (props) => {
  console.log("ResultOutput:   " + props.item);
  return (
    <p className={classes.item}>{props.item}</p>
  );
};

export default ResultOutput;