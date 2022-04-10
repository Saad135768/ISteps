import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 

div_container: {
    textAlign: 'end',
    marginBottom: 10
    },

span_sortBy: {
    fontSize: 20,
    color: '#9B9B9B',
    margin: '0 10px',
    '& svg': {
        transform: 'rotate(180deg)',
        transition:'0.2s',
        fontSize: 26,
        marginBottom: -5,
        cursor: 'pointer',
        // '&:hover': {
        //     transform: 'rotate(0deg)',
        // }
    },
}, 
    rotate: {
        transform: 'rotate(0deg) !important',

    },

span_price: {
    display: 'inline-flex',
    alignItems: 'end',
    cursor: 'pointer',
    fontSize: 20,
    
    '& select': {
        fontSize: 20,
        border: 0,
        cursor: 'pointer',
    },
    // '& svg': {
    //     transform: 'rotate(180deg)',
    //     transition:'0.2s',
    //     fontSize: 25,
    //     '&:hover': {
    //       transform: 'rotate(0deg)',
    //   }
    //   },
},

div_products_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    
    '@media (max-width: 500px)': {
        justifyContent: 'center',
        margin: '20px 0',
    },
}

}))

export default useStyles