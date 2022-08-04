import '../App.css'

import { Link } from 'react-router-dom'

import bolso from '../images/bolso.png'
import bricks from '../images/bricks.jpg'

const Page2 = () => {
  return (
    <div
      className='centralize'
      style={{
        backgroundImage: `url(${bricks})`,
        backgroundSize: '350%',
        height: '100%',
        justifyContent: 'space-evenly',
      }}
    >
      <img className='centerImg' src={bolso} alt='' />
      <Link to='/page3'>
        <button className='mainButton' style={{ backgroundColor: '#502923' }}>
          CLICA AQUI <br></br>
          RAPIDÃO
        </button>
      </Link>
    </div>
  )
}

export default Page2
