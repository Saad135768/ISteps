import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 

div_container: {
    textAlign: 'end',
    marginBottom: 10
    },

span_sortBy: {
    fontSize: 20,
    color: '#9B9B9B',
    margin: '0 10px'
}, 

span_price: {
    display: 'inline-flex',
    alignItems: 'end',
    cursor: 'pointer',
    fontSize: 20,

    '& svg': {
        transform: 'rotate(180deg)',
        transition:'0.2s',
        fontSize: 25
      },
},

div_products_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
}

}))

export default useStyles