import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "purple",
  color: "#fff",
}));

export default function CustomButton(props) {
  return <StyledButton variant="contained">{props.label}</StyledButton>;
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};
