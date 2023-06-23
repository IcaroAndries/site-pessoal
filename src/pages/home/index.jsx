import './style.sass'
import { Header, Hero, About, Footer } from '../../components'

function Home() {
  //testando geolocalização

  return (
    <div className='root-container'>
      <Header />      
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home;