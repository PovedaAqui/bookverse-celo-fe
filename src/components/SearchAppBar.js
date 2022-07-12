import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/material/styles';
import StoreIcon from '@mui/icons-material/Store';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {ListItemIcon, ListItemText, ListItem} from '@mui/material';
import { useLocation, useNavigate} from 'react-router';

const PREFIX = 'SearchAppBar';

const classes = {
  page: `${PREFIX}-page`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  appBar: `${PREFIX}-appBar`
};

const StyledBox = styled(Box)((
  {
    theme
  }
) => {
  return {
    [`& .${classes.page}`]: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    [`& .${classes.drawer}`]: {
      width: drawerWidth,
    },
    [`& .${classes.drawerPaper}`]: {
      width: drawerWidth,
    },
    [`& .${classes.appBar}`]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    [`& .${classes.active}`]: {
      background: '#f4f4f4'
    }
};});

const drawerWidth = 250;

export default function SearchAppBar({title, ...props}) {

  const { data } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    left: false
  });

  const menuItems = [
    { 
      text: 'Store', 
      icon: <StoreIcon color="secondary" />, 
      path: '/sellingnft' 
    },
    { 
      text: 'My NFTs', 
      icon: <AccountBalanceWalletIcon color="secondary" />, 
      path: '/' 
    },
  ];

  return (
    <StyledBox sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>

          <Button id={data.id} color={data.color} variant={data.variant} href="#contained-buttons" onClick={data.handle}>
          {data.colorIcon ? <LogoutIcon color={data.colorIcon} /> : null}
          {data.text}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer 
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        >
        <Toolbar />
        <Divider />
        <List>
          {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                onClick={() => navigate(item.path)}
                className={location.pathname == item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
        </List>
        </Drawer>
    </StyledBox>
  );
}