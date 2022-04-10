import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({ 
    header: {
        borderBottom: '4px solid #E4E4E4',
        
    },
    div:{
        '@media (max-width: 500px)': {
            position: 'relative'
        },
    },
    div_wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0 10px',

        '& span': {
            display: 'flex',
            alignItems: 'center',

            '@media (max-width: 500px)': {
                position: 'absolute',
                bottom: -50,
                width: '100%',
                zIndex: 2
            },
        },
        '& h1': {
            '@media (max-width: 380px)': {
                fontSize: 19
            },
        },
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
        '&:hover': {
            color: '#000',
            backgroundColor: '#fff'
        },

        '@media (max-width:767px)': {
          padding: '14px',
          fontSize: '18px',
        },
        '@media (max-width: 500px)': {
            width: '100%',
        },
        '@media (max-width: 380px)': {
            fontSize: '14px',
            lineHeight: '5px',
            
        },

    },
    Grid_container: {
        '@media (max-width: 500px)': {
            flexDirection: 'column-reverse',
            marginTop: 40
        },
    },
    div_bgImg_wrapper: {
        position: 'relative'
    },

    h4: {
        fontSize: 22,
        fontWeight: 700,
        '@media (max-width: 500px)': {
            fontSize: 18,
        },
    },

    p: {
        color: '#656565',
        fontWeight: 400
    },

    span_featured: {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 2,
        background: '#fff',
        padding: '15px 60px',
        fontWeight: 800
    },

  

    div_imgs_wrapper: {
        '@media (max-width: 500px)': {
           display: 'flex',
        },
        '& img': {
            cursor: 'pointer',
            '@media (max-width: 500px)': {
                margin: '0 !important',
                minWidth: '80% !important',
            },
           
        },
        ' & span:nth-child(1), span:nth-child(2), span:nth-child(3)': {
            marginRight: '20px !important',
            '&:hover': {
                transform: 'scale(1.1)',
                opacity: .7,
            },

            '@media (max-width: 500px)': {
                marginRight: '0px !important',
            },
           
        },
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
        letterSpacing: '0em'
    }


})
)

export default useStyles