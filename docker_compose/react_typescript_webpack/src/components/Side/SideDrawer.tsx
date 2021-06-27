import React from 'react'
import parts_settings from '../parts_settings'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface SideDrawProps {
}
export const SideDrawer = ({}: SideDrawProps) =>
    <div>
        <List>
            {parts_settings.side_bar.items.map((item: string, index: number) => {
                return (
                    <ListItem button>
                        <ListItemText primary={item} />
                    </ListItem>
                )
            })}
        </List>
    </div>