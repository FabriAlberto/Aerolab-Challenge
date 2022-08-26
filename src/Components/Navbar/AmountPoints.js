import React from 'react'
import { UserContext } from '../../Context/UserContext';
import { useContext } from 'react';
const AmountPoints = () => {
    const test = useContext(UserContext);
    const {handlePoints}=test
  return (
    <>
    
      <div>AmountPoints</div>
     <button onClick={handlePoints}></button>
    </>
  )
}

export default AmountPoints