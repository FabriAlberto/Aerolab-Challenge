import React, { useContext } from 'react'
import header from '../../assets/header-x1.png'
import { UserContext } from '../../Context/UserContext'

const Header = () => {
  const test=useContext(UserContext)
  return (
    <>
    { test.status  
     && 
    <div className='header col-12'>
       <img className='header__img' src={header} alt="headerImg"></img>
       <h2 className='header__h2'>Electronics</h2>
    </div>
    } 
    </>
  )
}
export default Header;