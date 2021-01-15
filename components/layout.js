import Head from 'next/head'
import Nav from '../components/Nav/nav';
import Footer from '../components/Footer/footer'

function Layout({children}) {
    //console.log("user from layout", user)
    return (
      <>
        
      <Head>
        <title>Fabrice MIQUET-SAGE *Fullstack developper*</title>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      
  
        <Nav />  
        <main>
          <div className="layout">{children}</div>
        </main>
        <Footer />
      </>
    )
  }
  
  export default Layout