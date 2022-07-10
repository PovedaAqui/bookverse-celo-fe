import { ListItem, ListItemText, Divider} from '@mui/material';
import React from 'react'

const List = () => {
  return (
    <div>
        <List component='nav'>
            <ListItem button>
                <ListItemText primary='Store'/>
            </ListItem>

            <ListItem button>
                <ListItemText primary='My NFTs'/>
            </ListItem>

            <Divider/>

        </List>
    </div>
  )
}

export default List;