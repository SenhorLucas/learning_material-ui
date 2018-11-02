import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, Typography } from "@material-ui/core";

const styles = {};

const LvDrawer = props => {
  return (
    <Drawer open={props.drawerOpen} onClose={props.toggleDrawerOpen}>
      <List>
        <ListItem>
          <Typography variant="h6">Item 1</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="h6">Item 2</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(LvDrawer);
