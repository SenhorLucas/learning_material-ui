import React from "react";
import PropTypes from "prop-types";
import { withTheme, withStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import MenuButton from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

function LvAppBar(props) {
  const { theme } = props;
  console.log("theme");
  console.log(theme);

  const styles = {
    root: {},
    grow: {
      flexGrow: 1
    },

    firstItem: {
      marginLeft: -12,
      marginRight: 10
    },

    lastItem: {
      marginRight: -12
    }
  };

  return (
    <div className={styles.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={props.toggleDrawerOpen}
            style={styles.firstItem}
            color="inherit"
          >
            <MenuButton />
          </IconButton>
          <Typography color="inherit">Title</Typography>
          <div style={styles.grow} />
          <IconButton style={styles.lastItem} color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// LvAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withTheme()(LvAppBar);
