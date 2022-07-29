import { Link } from 'react-router-dom'

const Page3 = () => {
  return (
    <nav>
      EU SOU O PAGE 3
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/page2'>Page 2</Link>
        </li>
        <li>
          <Link to='/page3'>Page 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Page3
