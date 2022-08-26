import React from 'react'
import ItemContainer from './ItemContainer'
const Items = ({data}) => {
  return (
    <>
     <div className=''>
        <div className='d-flex flex-row col-md-12 flex-wrap justify-content-center '>

         {data.map( product => <ItemContainer key={product._id} data={product} ></ItemContainer>)} 
        </div>
        

             
     </div>
    </>
  )
}

export default Items