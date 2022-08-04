import '../App.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'
import css from '../images/styles.mp3'

const Page7 = () => {
  const [noButtonTranslate, setNoButtonTranslate] = useState([80, 47])
  const audio = new Audio(css)

  useEffect(() => {
    audio.play()
  }, [])

  const handleTranslateButton = () => {
    const x = Math.random() * 95
    const y = Math.random() * 95
    console.log({ x, y })
    setNoButtonTranslate([x, y])
  }

  return (
    <div className='pageItems'>
      <div className='centralize'>
        <div className='attention' style={{ marginBottom: 300 }}>
          POSSO ESCURECER SUA FAMÍLIA?
        </div>
        <div>
          <Link to='/page9'>
            <button className='yesButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: '100%' }}>
              SIM
            </button>
          </Link>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        style={{ position: 'absolute', top: `${noButtonTranslate[0]}%`, left: `${noButtonTranslate[1]}%` }}
        onClick={handleTranslateButton}
      >
        não
      </a>
    </div>
  )
}

export default Page7
