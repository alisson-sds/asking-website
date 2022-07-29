import buildings from './images/buildings.jpg';
import './App.css';
import bricks from './images/bricks.jpg';
import excavator from './images/excavator.jpg';

function App() {
  return (
    <div className='mainDiv'>
      <header style={{ backgroundImage: `url(${buildings})`, backgroundSize: '100%', height: '185px' }}></header>
      <div className='middlePage'>
        <div>
          <h1 className='mainTitles'>
            BOTA UMA FRASE <br></br>
            ENGRAÇADA AQUI
          </h1>
        </div>
        <div className='mainText'>
          Lornyhcpole eu te amoooooem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis eu posso facilmente assassinar um leão da
          montanha doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto
        </div>
        <div>
          <button className='mainButton' style={{ backgroundImage: `url(${bricks})`, backgroundSize: "100%" }}>
            CLICA AQUI <br></br>
            RAPIDÃO
          </button>
        </div>
      </div>

      <footer style={{ backgroundImage: `url(${excavator})`, backgroundSize: '100%', height: '264px' }}></footer>
    </div>
  )
}

export default App
