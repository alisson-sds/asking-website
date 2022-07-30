import { Link } from 'react-router-dom'
import '../App.css'
import bolso from '../images/bolso-inter.png'

const Page8 = () => {
  return (
    <div style={{ backgroundImage: `url(${bolso})`, backgroundSize: 'cover', height: '844px' }}>
      <Link to='/'>
        <button className='corre' style={{ backgroundColor: '#502923', marginLeft: '130px', marginTop: '350px' }}>
          CORRE!<br></br>
        </button>
      </Link>
    </div >
  )
}

export default Page8
