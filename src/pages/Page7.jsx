import '../App.css'

import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'

const Page7 = () => {
  return (
    <div className='mainDivAsk'>
      <div className='pageItens'>
        <div className='centralize'>
          <div className='attention' style={{ marginBottom: 300 }}>
            POSSO ESCURECER
            SUA FAMÍLIA?
          </div>
          <div>
            <Link to='/page9'>
              <button className='yesButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '100%' }}>
                SIM
              </button>
            </Link>
          </div>
        </div>
        <a style={{ transform: 'translate(82px, 40px)' }} onClick={() => { }}>
          nao
        </a>
      </div>
    </div>
  )
}

export default Page7
