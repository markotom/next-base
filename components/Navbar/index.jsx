import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default">
      <Toolbar className="container">
        <Box mr={4}>
          <Typography variant="h6" className={classes.title}>
            Next Base
          </Typography>
        </Box>

        <Box mr={3}>
          <Link href="/">Home</Link>
        </Box>
        <Box mr={3}>
          <Link href="/about">About</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
