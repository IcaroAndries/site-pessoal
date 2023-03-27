
import './App.sass'
import { Header, Main } from './components'

function App() {

  return (
    <div className='root-container'>
      <Header />      
      <div className='main-container'>
        <Main />
      </div>
      
    </div>
  )
}

export default App
