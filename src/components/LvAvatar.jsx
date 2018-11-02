import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core";
import { Folder, Pageview } from "@material-ui/icons";
import { pink, green } from "@material-ui/core/colors";

const styles = {
  avatar: {
    margin: 10
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: pink[500]
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  },
  row: {
    display: "flex",
    justifyContent: "center"
  }
};

const AvatarIcons = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar className={classes.pinkAvatar}>
        <Folder />
      </Avatar>
      <Avatar className={classes.greenAvatar}>
        <Pageview />
      </Avatar>
      <Avatar className={classes.avatar}>
        <Folder />
      </Avatar>
    </div>
  );
};
export const LvAvatarIcons = withStyles(styles)(AvatarIcons);
