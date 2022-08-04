import './index.css'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PageStyle1 from './components/PageStyle1'
import PageStyle2 from './components/PageStyle2'
import bolsoheart2 from './images/bolso-heart2.jpg'
import bolso from './images/bolso.png'
import buildings from './images/buildings.jpg'
import excavator from './images/excavator.jpg'
import exclamation from './images/exclamation-mark.jpg'
import knifeDude from './images/knife-dude.png'
import Page7 from './pages/Page7'
import Page9 from './pages/Page9'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PageStyle1
              image={buildings}
              image2={excavator}
              imageStyle={{ backgroundPositionY: 'center' }}
              image2Style={{ backgroundPositionY: '100%' }}
              title='PREVEJO UM TITULO BEM CRINGE'
              text='Piadas muito divertidas loremm ipsum Piadas muito divertidas loremm ipsumPiadas muito divertidas loremm ipsumPiadas muito divertidas loremm ipsum'
              nextPage='/page2'
            />
          }
        />
        <Route path='/page2' element={<PageStyle2 image={bolso} nextPage='/page3' />} />
        <Route
          path='/page3'
          element={
            <PageStyle1
              image={bolsoheart2}
              image2={bolso}
              imageStyle={{ backgroundPositionY: '70%' }}
              image2Style={{ backgroundPositionY: '-200%', backgroundSize: '100%' }}
              title='PREVEJO UM TITULO BEM CRINGE'
              text='Piadas muito divertidas loremm ipsum Piadas muito divertidas loremm ipsumPiadas muito divertidas loremm ipsumPiadas muito divertidas loremm ipsum'
              nextPage='/page4'
            />
          }
        />
        <Route path='/page4' element={<PageStyle2 image={bolso} nextPage='/page5' />} />
        <Route
          path='/page5'
          element={
            <PageStyle1
              image={exclamation}
              image2={knifeDude}
              imageStyle={{ backgroundPositionY: '70%' }}
              image2Style={{ backgroundSize: '100%' }}
              title='ATENÇÃO!'
              text='Vou te fazer uma pergunta e antes de responder, lembra que tenho uma faca no porta-luvas'
              nextPage='/page6'
            />
          }
        />
        <Route path='/page6' element={<PageStyle2 image={bolso} nextPage='/page7' />} />
        <Route path='/page7' element={<Page7 />} />
        <Route path='/page9' element={<Page9 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
