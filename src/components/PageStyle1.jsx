import { Link } from 'react-router-dom'
import bricks from '../images/bricks.jpg'

const PageStyle1 = ({ image, image2, title, text, imageStyle, image2Style, nextPage }) => {
  const gradientImage = (imageUrl) => `linear-gradient(to bottom, transparent 0%, #d9d9d9 95%), url(${imageUrl})`
  const gradientImageMirror = (imageUrl) => `linear-gradient(to top, transparent 0%, #d9d9d9 95%), url(${imageUrl})`
  return (
    <>
      <div
        style={{
          backgroundImage: gradientImage(image),
          backgroundSize: 'cover',
          height: '25%',
          ...imageStyle,
        }}
      />
      <div className='centralize' style={{ justifyContent: 'space-between', height: '50%' }}>
        <h1 style={{ width: '75%', transform: 'translatey(-125%)' }} className='mainTitles'>
          {title}
        </h1>
        <p className='mainText'>{text}</p>
        <Link to={nextPage} style={{ transform: 'translatey(100%)' }}>
          <button className='mainButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '100%' }}>
            CLICA AQUI <br />
            RAPIDÃO
          </button>
        </Link>
      </div>
      <div
        style={{
          backgroundImage: gradientImageMirror(image2),
          backgroundSize: 'cover',
          height: '25%',
          ...image2Style,
        }}
      />
    </>
  )
}

export default PageStyle1
