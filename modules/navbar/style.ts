import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
        borderBottom: '4px solid #E4E4E4',
    },
    span_logo_container: {
        '& img': {
            minWidth: '80% !important',
            minHeight: '80% !important',
            marginLeft: '0 !important'
        }
    },
    span_icon_wrapper: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        '& svg': {
            fontSize: 50,
            '@media (max-width: 500px)': {
                fontSize: 38
              },
            '@media (max-width: 300px)': {
                fontSize: 33
              },
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
        paddingLeft: 2,
        '@media (max-width: 500px)': {
            width: 15,
            fontWeight: 300,
            paddingLeft: 1,
        },
        // '@media (max-width: 300px)': {
        //     bottom: 8,
        //     right: 3,
        // },

        '@media (max-width: 380px)': {
            display: 'none'
        },
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
        overflowY: 'auto',
        '@media (max-width: 959px)': {
            width: 400,
            height: 280,
        },

        '@media (max-width: 520px)': {
            width: 330,
          },
          '@media (max-width: 380px)': {
            display: 'none'
        },
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
        color: '#656565',
        '@media (max-width: 520px)': {
            fontSize: 14,
          },
    },
    p_product_name:{
        fontSize: 20,
        fontWeight: 700,
        margin: '10px 0',
        '@media (max-width: 520px)': {
            fontSize: 14,
          },
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
        },
        '@media (max-width: 959px)': {
            padding: 5
          },
    }
}))

export default useStyles