import { Link } from 'react-router-dom'
import '../App.css'
import beira from '../images/beira-rio.png'

const Page9 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${beira})`,
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link to='/' style={{ marginTop: '350px' }}>
        <button className='corre' style={{ backgroundColor: '#502923' }}>
          Voltar
        </button>
      </Link>
    </div>
  )
}

export default Page9
