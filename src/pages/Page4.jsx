import { Link } from 'react-router-dom'
import '../App.css'
import bricks from '../images/bricks.jpg'
import bolso from '../images/bolso.png'

const Page4 = () => {
  return (
    <div style={{ backgroundImage: `url(${bricks})`, backgroundSize: '100%', height: '844px', backgroundSize: '350%' }}>
      <img className='centerImg' src={bolso} />
      <Link to='/page5'>
        <button className='mainButton' style={{ backgroundColor: '#502923', marginLeft: '100px', marginTop: '40px' }}>
          CLICA AQUI <br></br>
          RAPIDÃO
        </button>
      </Link>
    </div >
  )
}

export default Page4
