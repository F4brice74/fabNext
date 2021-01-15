import Head from 'next/head'
import References from '../components/References/references'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabrice MIQUET-SAGE - fullstack developper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <References />

     </div>
  )
}
