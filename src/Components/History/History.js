import React, { useEffect, useState } from 'react'
import { getProductsHistory } from '../../API/Api'
import Loading from '../Items/Loading'
import ItemsHistory from './ItemsHistory'
const History = () => {
   const [itemsHistory,setItemsHistory]=useState([ ])

   const [order,setOrder]=useState(['NEWER'])

   useEffect(()=>{
     getProductsHistory()
     .then(res=>{
      order==='NEWER'?
      setItemsHistory(res.reverse())
      :
      setItemsHistory(res)
    })
     .catch(err=>{console.log(err)})
   },[order])

  const handleOrderOlder=()=>{
    if (order==='OLDER') return
    else setOrder('OLDER')
  }
  
  const handleOrderNewer=()=>{
      if(order==='NEWER')return
      else setOrder('NEWER')
  }
  return (  
    <>
      <div className='container'>
        <div>
        <h2 className='my-5'> Your purchase history</h2>
        </div>
        <div className='w-100 d-flex justify-content-end'>

        <button onClick={()=>handleOrderOlder()} className='button__order__history'>Older</button> 
        
        <button onClick={()=>handleOrderNewer()} className='button__order__history'>Newer</button> 


        </div>
        {itemsHistory.length>0?itemsHistory.map((el,i) => <ItemsHistory key={i} data={el}></ItemsHistory>):<Loading></Loading>}
      </div>
    </>
   
  )
}

export default History