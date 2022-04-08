import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 

    header: {
        borderBottom: '4px solid #E4E4E4',
    },
    div_wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0 10px',
        '& span': {
            display: 'flex',
            alignItems: 'center',
        }
    },

    div_bgImg_wrapper: {
        position: 'relative',
    },

    h4: {
        fontSize: 22,
        fontWeight: 700
    },

    p: {
        color: '#656565',
        fontWeight: 400
    },
    span_featured: {
        position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    background: '#fff',
    padding: '15px 60px',
    fontWeight: '800',
    },

    btn: {
        backgroundColor: '#000',
        border: 0,
        fontSize: 20,
        padding: 16,
        boxShadow: '2px 2px 4px rgb(0 0 0 / 66%)',
        borderRadius: 0,
        textTransform:'uppercase',
        letterSpacing: '2px',
        lineHeight: '15px',
        fontWeight: 100,
        cursor:'pointer',
        color: '#fff',
        transition: 'all .8s ease',
    
        '@media (max-width:767px)': {
          padding: '14px',
          fontSize: '18px',
        },

        '&:hover': {
            color: '#000',
            backgroundColor: '#fff'
        }
    },

    div_imgs_wrapper: {
        ' & span:nth-child(1)': {
            marginRight: '20px !important'    
        },
        ' & span:nth-child(2)': {
            marginRight: '20px !important'    
        },
        ' & span:nth-child(3)': {
            marginRight: '20px !important'    
        }
    },

    article: {
        '& h4': {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 22,
            lineHeight: '24px',
        },
        color: '#656565',
        fontSize: 18,
        fontWeight: 400,
        lineHeight: '27px',
        letterSpacing: '0em',


    }
}))

export default useStyles