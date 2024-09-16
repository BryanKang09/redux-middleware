import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = ['Woman','Men','Kids','Shoes','Bags']
  return (
    <>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div>Login</div>
        </div>

        <div className='logo'>
            <img width ="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png" />
        </div>
        
        <div className='menu-area'>
            <li className='menu-list'>
                    {menuList.map(menu =><li>{menu}</li> )}
            </li>
            <div className='search-box'>                
                <input type="text" className='search-input'></input>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>

        

    </>
  )
}

export default Navbar
