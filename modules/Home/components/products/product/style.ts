import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    div_container: {
        position: 'relative',
        marginBottom: 20,
        
        '@media (max-width: 500px)': {
            marginBottom: 25,
            // '& img': {
            //     // minWidth: '80% !important',
            //     // minHeight: '80% !important'
            // },
            '& p': {
                fontSize: 18
            }
        },
    },
    // Best Seller span
    span: {
        position: 'absolute',
        padding: 3,
        background: '#fff',
        zIndex: 2,
    },
    button: {
        display: 'block',
        marginTop: -42,
        zIndex: 4,
        position: 'absolute',
        width: 280,
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
    },
    p_material: {
        color: '#656565',
        fontSize: 20,
        fontWeight: 700,
        margin: '10px 0 5px 0',
    },
    // Product's name
    p_name: {
        color: '#000',
        fontSize: 27,
        fontWeight: 700,
        margin: '5px 0',
    },
    p_price: {
        color: '#656565',
        fontSize: 25,
        fontWeight: 400,
        margin: '5px 0',
    }
}))

export default useStyles