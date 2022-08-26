import React, { useState } from 'react'
import { useContext } from 'react'
import Coin from '../../assets/icons/coin.svg'
import { UserContext } from '../../Context/UserContext';
import AmountPoints from './AmountPoints';
const Points = () => {
  const [addPoint, setAddPoint] = useState(false)
  const test = useContext(UserContext);

  const handleAddPoints = () => {
    addPoint===false?setAddPoint(true):setAddPoint(false)
    console.log("hola")
  }
  return (
    <>
      <div onClick={() => handleAddPoints()} className='navbar__points d-flex justify-content-around align-items-center'>
        <p className='navbar__p'>{test.user?.points}</p>
        <img alt='coin' src={Coin} />
        <div className='navbar__points__hover'>Add Points +</div>
      </div>
        {
        addPoint===true&&<AmountPoints/>
        }
      
    </>
  )
}

export default Points