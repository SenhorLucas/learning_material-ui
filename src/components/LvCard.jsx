import React from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";

const styles = theme => ({
  title: {
    fontSize: 14
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  card: {
    minWidth: 275
  }
});

const WordOfTheDayCard = props => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card} square={true}>
      <CardContent>
        <Typography className={classes.title} color={"textSecondary"}>
          Word of the day
        </Typography>
        <Typography variant="h5">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography variant="inherit">
          well meaning and kindly. <br />
          {"'a benevolent smile'"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const LvWordOfTheDayCard = withStyles(styles)(WordOfTheDayCard);
