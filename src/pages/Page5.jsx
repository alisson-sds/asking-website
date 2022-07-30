import '../App.css'

import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'
import exclamation from '../images/exclamation-mark.jpg'
import knifeDude from '../images/knife-dude.png'

const Page5 = () => {
  return (
    <div className='mainDiv'>
      <header style={{ backgroundImage: `url(${exclamation})`, backgroundSize: '100%', height: '185px' }}></header>
      <div className='middlePage'>
        <div>
          <h1 className='attention'>
            ATENÇÃO!
          </h1>
        </div>
        <div className='attentionText'>
          Vou te fazer uma <br></br>
          pergunta e antes de <br></br>
          responder, lembra <br></br>
          que tenho uma faca <br></br>
          no porta-luvas.
        </div>
        <div>
          Você foi avisada!
        </div>
        <div style={{ marginTop: '100px' }}>
          <Link to='/page6'>
            <button className='mainButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '25%' }}>
              CLICA AQUI <br></br>
              RAPIDÃO
            </button>
          </Link>
        </div>
      </div>
      <footer style={{ backgroundImage: `url(${knifeDude})`, backgroundSize: '100%', height: '264px' }}></footer>
    </div>
  )
}

export default Page5
