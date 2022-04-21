import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
// MUI Stuff
import { Button, Typography, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  padLoading: {
    paddingLeft: 8,
  },
}));

function LoadingButton(props) {
  const { children, isLoading, ...rest } = props;
  const classes = useStyles();
  return (
    <>
      <Button
        {...rest}
        variant={props.variant || "contained"}
        color={props.color || "primary"}
        disabled={isLoading || props.disabled}
      >
        {isLoading && <CircularProgress size={20} />}
        <Typography
          component="span"
          className={isLoading ? classes.padLoading : null}
        >
          {children}
        </Typography>
      </Button>
    </>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  btnVariant: PropTypes.string,
  btnClass: PropTypes.string,
  btnColor: PropTypes.string,
  btnType: PropTypes.string,
  onClickHandle: PropTypes.func,
};

export default LoadingButton;
