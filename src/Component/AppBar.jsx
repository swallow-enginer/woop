import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});


class TopAppBar extends React.Component{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
              <Box textAlign="left" className={classes.title}>
                  <Typography variant="h5" textAlign="left">
                      Title
                  </Typography>
              </Box>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(TopAppBar);
