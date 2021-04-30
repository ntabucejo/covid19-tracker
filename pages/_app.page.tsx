import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/app.scss'
import Layout from '../components/Layout'

const AppPage = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Covid19 Tracker</title>
        <link rel="icon" href="/covid19-tracker-logo.svg"/>
      </Head>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </>
  )
}

export default AppPage
