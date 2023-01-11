/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router'

import { Link } from 'react-router-dom'

import './App.css'
import About from './page/About'
import HomePage from './page/HomePage'
import NotFound from './page/NotFound'
import UserAdd from './page/UserAdd'
import Users from './page/Users'

function App () {
  return (
    <>
      <div className="App">
        <nav>
          <ul>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/users'>Users</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/useradd" element={<UserAdd />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
