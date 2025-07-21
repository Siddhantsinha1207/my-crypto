import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <TextField
      className="w-full"
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
