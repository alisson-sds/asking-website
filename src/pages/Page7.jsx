import '../App.css'

import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'
import worker from '../images/workman.png'

const Page7 = () => {
  return (
    <div className='mainDivAsk'>
      <div className='pageItens'>
        <div className='askingText'>
          Vou te fazer uma <br></br>
          pergunta e antes de <br></br>
          responder, lembra <br></br>
          que tenho uma faca <br></br>
          no porta-luvas.
        </div>
        <div className='attention'>
          POSSO ESCURECER
          SUA FAMÍLIA?
        </div>
        <div style={{ marginTop: '100px', marginBot: '300px' }}>
          <Link to='/page9'>
            <button className='mainButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '25%' }}>
              SIM
            </button>
          </Link>
        </div>
        <Link to='/page8'>
          NAAAAAAAO
        </Link>
        {/* <footer style={{ backgroundImage: `url(${worker})`, backgroundSize: '100%', height: '200px' }}></footer> */}
      </div>
    </div>
  )
}

export default Page7
