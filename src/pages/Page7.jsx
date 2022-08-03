import '../App.css'

import { Link } from 'react-router-dom'

import bricks from '../images/bricks.jpg'
import { useState } from 'react'

const Page7 = () => {
  // const [noButtonTranslate, setNoButtonTranslate] = useState([90, 47])
  const [noButtonTranslate, setNoButtonTranslate] = useState([80, 47])

  const handleTranslateButton = () => {
    const x = Math.random() * 95
    const y = Math.random() * 95
    console.log({ x, y })
    setNoButtonTranslate([x, y])
  }

  return (
    <div className='mainDivAsk'>
      <div className='pageItens'>
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
          // style={{ transform: `translate(${noButtonTranslate[0]}px, ${noButtonTranslate[1]}px)` }}
          style={{ position: 'absolute', top: `${noButtonTranslate[0]}%`, left: `${noButtonTranslate[1]}%` }}
          onClick={handleTranslateButton}
        >
          nao
        </a>
      </div>
    </div>
  )
}

export default Page7
