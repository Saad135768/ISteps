import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  div_container: {
    display: 'none',
        '@media (max-width: 959px)': {
            display: 'block',
            marginBottom: 40,
            width: '100%',
          },
  },
  div_btns_wrapper:{
    display: 'flex',
    justifyContent: 'space-around',
    /* margin-bottom: 25px, */
    boxShadow: 'black 1px 1px 5px',
    padding: 10,

    '& button:nth-child(1)': {
      width: '45%',
      background: '#000',
      color: '#fff',
      cursor: 'pointer',
      border: 0,
      padding: 5,
      marginRight: 10,
      '&:hover': {
        background: '#fff',
        color: '#000',
      }
  },

    '& button:nth-child(2)': {
      width: '45%',
      background: '#fff',
      color: '#000',
      cursor: 'pointer',
      border: '1px solid',
      padding: 5,  
      '&:hover': {
        background: '#000',
        color: '#fff',
      }
  },
  },
}))

export default useStyles
