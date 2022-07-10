import { Divider, makeStyles } from '@mui/material';
import List from './List';

const styles = makeStyles(theme => ({
    drawer: {
        width: 5,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}))

const Drawer = (props) => {

    const classes = styles();
     
  return (
    <div>
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant="temporary"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
        <div className={classes.toolbar}></div>
        <Divider />
        <List />
        </Drawer>
    </div>
  )
}

export default Drawer;