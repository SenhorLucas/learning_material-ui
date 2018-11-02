import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "center"
  },
  badge: {
    top: 1,
    right: -15,
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
});

const LvBadges = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <IconButton disabled>
        <Badge
          badgeContent={"1m"}
          color="primary"
          classes={{ badge: classes.badge }}
        >
          <ShoppingCart />
        </Badge>
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(LvBadges);
