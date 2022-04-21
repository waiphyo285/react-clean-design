import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import { increment } from "redux/actions/appActions";

export const Math = () => {
  const { counter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const add = () => {
    // WITHOUT THUNK MIDDLEWARE you can dispatch only plain ACTION object.
    // WITH THUNK MIDDLEWARE you can now dispatch ACTION functions.
    // dispatch(incrementAction());
    dispatch(increment(5));
  };

  const subtract = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          align="center"
        >
          Redux Counter: {counter}
        </Typography>
        <Grid item xs={12} sm={6} >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => add()}
          >
            +
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={() => subtract()}
          >
            -
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
