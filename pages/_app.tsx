import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import "../src/styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PatchDevs</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
