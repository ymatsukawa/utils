import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    side_drawer: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }
}))