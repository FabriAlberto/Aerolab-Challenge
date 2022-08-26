import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../API/Api'
import logo from '../../assets/icons/aerolab-logo.svg'
import { UserContext } from '../../Context/UserContext'
import Points from './Points'

const Navbar = () => {
    const test = useContext(UserContext)
    const { addUser, user } = test

    useEffect(() => {
        getUser()
            .then((res) => {
                addUser(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [addUser])

    return (
        <div className='navbar__cont  '>

            <div className=' navbar col-12
                          d-flex
                         justify-content-between
                         align-items-center
                         shadow-sm 
                         bg-body'>
                <div className=' col-1
                d-flex
                align-items-center
                mx-5'>
                    <Link to='/'><img className='navbar__logo' src={logo} alt="logoAerolab" ></img></Link>
                </div>
                <div className=' 
                navbar__container d-flex  
                 align-items-center 
                 mx-5'>
                    <div className='
                    navbar__container__name 
                     d-flex align-items-center '>
                      <Link to='/History'> <p className=' m-0 '>{user?.name}</p> </Link>  
                        
                    </div>
                    <Points></Points>
                </div>
            </div>
        </div>
    )
}

export default Navbar