import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 

    filters_icon: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        '& svg': {
        border: '1px solid',
        padding: 2,
        fontSize: 25,
        cursor: 'pointer',
        display: 'none',
        '@media (max-width: 959px)': {
            display: 'block',
          },
        }
    },
    div_pagination_container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0'
    },
    h2: {
        fontSize: 30,
        fontWeight: 700,
        marginTop: 35,

        '@media (max-width: 959px)': {
            textAlign: 'center',
          },
        '@media (max-width: 500px)': {
            fontSize: 21,
            marginBottom: 35
          },
    },

    span: {
        color: '#9B9B9B'
    }
}))

export default useStyles