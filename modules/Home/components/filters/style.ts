import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    aside: {
        display: 'inline-flex',
        flexDirection: 'column',
        '& svg': {
            marginRight: 5
        },
        '& path': {
            color:'#000'
        },
        '@media (max-width: 959px)': {
            display: 'none',
          },
    },
    div: {
        borderBottom: '1px solid #C2C2C2',
        paddingBottom: 20
    },
    h6: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 25
    },
    button: {
        marginTop: 20,
        textTransform: 'uppercase',
        background: '#000',
        color: '#fff',
        cursor: 'pointer',
        height: 40,
        border: 0,
        letterSpacing: 2,
        transition: '.8 ease-in-out all',
        '&:hover': {
            background: '#fff',
            color: '#000',
            border: '1px solid #000',
        }
    }
}))

export default useStyles