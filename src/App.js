import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { LvAvatarIcons } from "./components/LvAvatar";
import LvBadges from "./components/LvBagdes";
import { LvWordOfTheDayCard } from "./components/LvCard";
import LvAppBar from "./components/LvAppBar";
import LvDrawer from "./components/LvDrawer";

const styles = theme => {
  console.log(theme);
  return {
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`
    },

    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 4,
      marginRight: theme.spacing.unit * 4,
      margin: "10px"
    }
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  toggleDrawerOpen = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline />

        <LvAppBar toggleDrawerOpen={this.toggleDrawerOpen} />
        <LvDrawer
          drawerOpen={this.state.drawerOpen}
          toggleDrawerOpen={this.toggleDrawerOpen}
        />

        <main className={classes.main}>
          <section>
            <LvAvatarIcons />
            <LvBadges />
          </section>
          <div className={classNames(classes.layout)}>
            <LvWordOfTheDayCard />
            <LvWordOfTheDayCard />
            <LvWordOfTheDayCard />
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
