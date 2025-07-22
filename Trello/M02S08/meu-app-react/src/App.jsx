
import './App.css'
import Navbar from './components/navbar/Navbar'
import PorQueInvestir from './components/pqInvestir/PorQueInvestir'

function App() {
  

  return (
    <>
    <div className='container-header'>
      <header id='header'>
        <h1>Energia Solar 365</h1>
        <h3>Economize com Sol. Invista no seu futuro!</h3>
        <div id='div-navbar-menu'>
          <Navbar />
        </div>
      </header>
      <main>
        <section id='porque-investir' className='container-pq-investir'>
          <h2>Por que investir em Energia Solar?</h2>
          
            
            <div className='card-pq-investir'>
              <PorQueInvestir 
                title='Redução da Conta'
                descripition='Economize até 90% na conta de energia elétrica'/>
              <PorQueInvestir 
                title='Sustentabilidade'
                descripition='Energia limpa e renovável, ajudando o planeta'/>
              <PorQueInvestir 
                title='Valorização do Imóvel'
                descripition='Residências com placas solares aumentam até 10% no valor de mercado'/>
              <PorQueInvestir 
                title='Retorno Garantido'
                descripition='Payback em 4-6 anos e economia mensal garantida'/>
            </div>
          
        </section>
      </main>
    </div>
    </>
  )
}

export default App
