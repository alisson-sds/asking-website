import '../App.css'

import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'
import buildings from '../images/buildings.jpg'
import excavator from '../images/excavator.jpg'

const Page1 = () => {
  const gradientImage = (imageUrl) => `linear-gradient(to bottom, transparent 0%, #d9d9d9 95%), url(${imageUrl})`
  const gradientImageMirror = (imageUrl) => `linear-gradient(to top, transparent 0%, #d9d9d9 95%), url(${imageUrl})`
  return (
    <>
      <div
        style={{
          backgroundImage: gradientImage(buildings),
          backgroundSize: 'cover',
          height: '25%',
          backgroundPosition: 'center',
        }}
      />
      <div className='centralize' style={{ justifyContent: 'space-between', height: '50%' }}>
        <h1 style={{ width: '75%', transform: 'translatey(-125%)' }} className='mainTitles'>
          BOTA UMA FRASE ENGRAÇADA AQUI
        </h1>
        <p className='mainText'>
          Lornyhcpole eu te amoooooem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Lornyhcpole eu te amoooooem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
        </p>
        <Link to='/page2' style={{ transform: 'translatey(100%)' }}>
          <button className='mainButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '100%' }}>
            CLICA AQUI <br />
            RAPIDÃO
          </button>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: gradientImageMirror(excavator),
          backgroundSize: 'cover',
          backgroundPosition: '100% 100%',
          height: '25%',
        }}
      />
    </>
  )
}

export default Page1
