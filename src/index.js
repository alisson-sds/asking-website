import './index.css'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PageStyle1 from './components/PageStyle1'
import PageStyle2 from './components/PageStyle2'
import bolsoheart2 from './images/bolso-heart2.jpg'
import bolso from './images/bolso.png'
import poa from './images/poa.jpg'
import canto from './images/canto.jpg'
import rosa from './images/rosa.jpg'
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
              title='POSSÍVEL PEDIDO DE NAMORO'
              text='Começo pedindo perdão por não ter a criatividade do Rimon e não ter dado uma aliança de ouro, mas algo eu te garanto, eu gosto infinitamente mais de ti do que ele gosta daquela pancadinha.'
              nextPage='/page2'
            />
          }
        />
        <Route path='/page2' element={<PageStyle2 image={poa} nextPage='/page3' />} />
        <Route
          path='/page3'
          element={
            <PageStyle1
              image={bolsoheart2}
              image2={bolso}
              imageStyle={{ backgroundPositionY: '70%' }}
              image2Style={{ backgroundPositionY: '-200%', backgroundSize: '100%' }}
              title='PROMETO QUE VOU MUDAR'
              text='Não irei mais dar em cima do Léo, por mais que ele insista e me provoque. Prometo não assaltar ninguém da sua família(vendi o .38). Sério agora, eu teria que criar outras 247 páginas para conseguir explicar uma fração do quão grande é o que eu sinto por ti, então vou dizer um humilde Eu te amo Isadora.'
              nextPage='/page4'
            />
          }
        />
        <Route path='/page4' element={<PageStyle2 image={rosa} nextPage='/page5' />} />
        <Route
          path='/page5'
          element={
            <PageStyle1
              image={exclamation}
              image2={knifeDude}
              imageStyle={{ backgroundPositionY: '70%' }}
              image2Style={{ backgroundSize: '100%' }}
              title='ATENÇÃO!'
              text='Antes de responder a pergunta lembra que tenho uma faca no porta-luvas!'
              nextPage='/page6'
            />
          }
        />
        <Route path='/page6' element={<PageStyle2 image={canto} nextPage='/page7' />} />
        <Route path='/page7' element={<Page7 />} />
        <Route path='/page9' element={<Page9 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
