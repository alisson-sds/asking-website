import { Link } from 'react-router-dom'
import '../App.css'
import beira from '../images/beira-rio.png'

const Page9 = () => {
  return (
    <div style={{ backgroundImage: `url(${beira})`, backgroundSize: '100%', height: '844px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Link to='/'>
        <button className='corre' style={{ backgroundColor: '#502923', marginTop: '350px' }}>
          Hehehaw<br></br>
        </button>
      </Link>
    </div >
  )
}

export default Page9
