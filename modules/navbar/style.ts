import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
        borderBottom: '4px solid #E4E4E4',
    },
    span_icon_wrapper: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        '& svg': {
            fontSize: 50,
        }
    },
    span_cart_counter: {
        width: 20,
        background: '#000',
        height: 20,
        color: '#fff',
        position: 'absolute',
        right: 0,
        bottom: 40,
        textAlign: 'center',
        fontWeight: 700,
        paddingTop: 2,
        paddingLeft: 2
    },
    div_quick_cart_container:{
        width: 450,
        background: '#fff',
        padding: 20,
        position: 'absolute',
        top: 100,
        right: -5,
        border: '4px solid #E4E4E4',
        zIndex: 3,
        height: 314,
        overflowY: 'auto'
    },
    span_close_btn:{
        display: 'flex',
        justifyContent: 'end',
        marginBottom: 20,
        marginTop: 10,
        fontSize: 19,
        fontWeight: 700,
        '&:hover':{
            opacity: .5
        }
    },
    div_products_wrapper: {
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: 20,
        paddingBottom: 10,
        // borderBottom: '1px solid',
    },
    p_price:{
        fontSize: 25,
        fontWeight: 400,
        margin: 0,
        color: '#656565'
    },
    p_product_name:{
        fontSize: 20,
        fontWeight: 700,
        margin: '10px 0'
    },
    button: {
        width: '100%',
        padding: 15,
        fontSize: 20,
        fontWeight: 500,
        background: 'white',
        textTransform: 'uppercase',
        cursor: 'pointer',
        margin: '10px 0',
        border: '4px solid',
        '&:hover': {
            background: '#000',
            color: 'white',
            border: '1px solid'
        }
    }
}))

export default useStyles