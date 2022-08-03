import { Link } from 'react-router-dom'
import '../App.css'
import bricks from '../images/bricks.jpg'
import bolso from '../images/bolso.png'

const Page2 = () => {
  return (
    <div style={{ backgroundImage: `url(${bricks})`, height: '844px', backgroundSize: '350%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img className='centerImg' src={bolso} alt='' />
      <Link to='/page3'>
        <button className='mainButton' style={{ backgroundColor: '#502923', marginTop: '40px' }}>
          CLICA AQUI <br></br>
          RAPIDÃO
        </button>
      </Link>
    </div >
  )
}

export default Page2
