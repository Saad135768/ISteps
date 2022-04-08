import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '@mui/material'
import Navbar from '../modules/navbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     <style>
          {`
            html,
            body {
              position: relative;
              padding: 0;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              font-family: Archivo, sans-serif;
              overflow-x: hidden;
              letter-spacing: 0.45px;
            }
            * {
              box-sizing: border-box;
              font-family: Archivo, sans-serif;
            }
            li {
              list-style: none;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
            .mainComponent {
              margin-top: 65px;
            }
            .MuiDialog-container {
              width: 100%;
            }
            @font-face {
              font-family: Archivo-Medium.ttf;
              src: url('../public/fonts/static/Archivo/Archivo-Medium.ttf');
            }
            @font-face {
              font-family: Archivo-Bold.ttf;
              src: url('../public/fonts/static/Archivo/Archivo-Bold.ttf');
            }
        `}
        </style>
      <Container maxWidth={'xl'}>
          <Navbar />
          <Component {...pageProps} />
      </Container>
    </>
  )}

export default MyApp
