import '../styles/globals.scss'
import Layout from '../components/layout'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>

  )
}

export default MyApp
