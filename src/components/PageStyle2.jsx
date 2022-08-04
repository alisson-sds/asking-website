import { Link } from 'react-router-dom'
import bricks from '../images/bricks.jpg'

const PageStyle2 = ({ image, nextPage }) => {
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
      <img className='centerImg' src={image} alt='' />
      <Link to={nextPage}>
        <button className='mainButton' style={{ backgroundColor: '#502923' }}>
          CLICA AQUI <br></br>
          RAPIDÃO
        </button>
      </Link>
    </div>
  )
}

export default PageStyle2
