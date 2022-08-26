import React, { useContext, useEffect } from 'react'
import Items from './Items';
import '../../CSS/Global.css'
import { UserContext } from '../../Context/UserContext';
import Loading from './Loading';
import { getProducts } from '../../API/Api';
import Header from '../Header/Header';
const Main = () => {

   
    const test=useContext(UserContext)
    const {setProducts,setStatus,products}=test;

    useEffect(()=>{
        getProducts()
        .then(res=>{
            setProducts(res)
            setStatus(true)
        })
        .catch(err=>console.log(err));
    },[setProducts,setStatus])
    return (
        <>
          <Header></Header>
            <div>

                {products.length===0 ? <Loading></Loading> : <Items data={products}></Items>}
            </div>
        </>
    )
}

export default Main