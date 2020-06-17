import '../styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>NextFirst</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
        <Component {...pageProps} />
    </>
  )
}