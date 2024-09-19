import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ['Woman','Men','Kids','Shoes','Bags']
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/login");
    }
    const search = (e) => {
        if (e.key==="Enter"){
            console.log ("keysss",e.key)
            let keyword = e.target.value
            console.log(keyword)
            navigate (`?q=${keyword}`);
        }
        
    }
  return (
    <>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div >Login</div>
        </div>

        <div className='logo'>
            <img width ="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png" alt="Zara"  />
        </div>
        
        <div className='menu-area'>
            <li className='menu-list'>
                    {menuList.map(menu =><li>{menu}</li> )}
            </li>
            <div className='search-box'>                
                
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(e)=>search(e)} className='search-input'></input>
            </div>
        </div>

        

    </>
  )
}

export default Navbar
