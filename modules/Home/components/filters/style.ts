import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    aside: {
        display: 'inline-flex',
        flexDirection: 'column',
    },
    h6: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 25
    }
}))

export default useStyles