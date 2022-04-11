import '../styles/globals.css'
import { StateMachineProvider, createStore } from 'little-state-machine'
import type { AppProps } from 'next/app'
import { Container } from '@mui/material'
import Navbar from '../modules/navbar'


createStore({})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
     {/* <style>
          {`
          
        `}
        </style> */}
      <Container maxWidth={'xl'}>
        <StateMachineProvider>
          <Navbar />
          <Component {...pageProps} />
        </StateMachineProvider>
      </Container>
    </>
  )}

export default MyApp
