import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='menuIcon'>
            <ul className='navbar_list'>
                <li>
                    <NavLink to="/">home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">about</NavLink>
                </li>
                <li>
                    <NavLink to="/products">products</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">contacts</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">cart</NavLink>
                </li>

            </ul>
    
    </div>
    </nav>
  )
}

export default Navbar