import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/about'>
        <Page2 />
      </Route>
      <Route path='/users'>
        <Page3 />
      </Route>
      <Route path='/'>
        <App />
      </Route>
    </Routes>
  </Router>
)

export default AppRoutes
