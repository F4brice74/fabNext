import '../styles/globals.scss'
import Layout from '../components/layout'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </Layout>
    </ApolloProvider>

  )
}

export default MyApp
