import React, { useContext, useState } from 'react';
import Coin from '../../assets/icons/coin.svg'
import BuyWhite from '../../assets/icons/buy-white.svg'
import { UserContext } from '../../Context/UserContext';
import { postRedeem } from '../../API/Api';
import Swal from 'sweetalert2';
const ItemContainer = ({ data }) => {
    const test = useContext(UserContext)
    const {setUser,setHistory,history,user}=test
    const points = test.user.points;
    const cost = new Intl.NumberFormat('es-AR', {}).format(data?.cost)
    const [statusBuy, setStatusBuy]=useState(false)

   const buy =()=>{
    setStatusBuy(true)
     postRedeem(data._id)
     .then(res=>{
        setStatusBuy(false)
        Swal.fire({
           icon:'success',
           title:'Product redeemed',
           html:`<h3 className="d-flex">You current points:${user.points-data.cost} <img src=${Coin} /> </h3> `,
           confirmButtonColor:'#0ad2face',
           footer:`<h5> 🛒Product:<b>${data.name}</b> 💵 Cost:<b>${data.cost}<img src=${Coin}/></b></h5>`
         })
        setHistory([...history,data]);
        setUser({...user, points:user.points-data.cost,redeemHistory:history})
     })
     .catch(err=>console.log(err));
   }
    return (
        <>
            <div className=' col-md-2.5 m-3'>
                <div className="card " >
                    <img src={data?.img?.url} className="card-img-top" alt={data?.name} />
                    <div className="card-body d-flex flex-column align-items-start">
                        <p className='card-text category__p'>{data?.category}</p>
                        <p className="card-text">{data?.name}</p>
                    </div>
                      <div className='container__price__need'>
                    {data.cost > points ?
                        <div className='container__need 
                        d-flex align-items-center 
                        justify-content-center'
                        >You are missing {data.cost - points} <img className='coin__need' src={Coin} alt='Coin' /></div>
                        :
                        <div className='container__cost'> {data?.cost} <img src={Coin} alt='Coin'/> </div>}
                        </div>
                    <div className='hover__card'>
                        <div className='container__buy'> <img src={BuyWhite} alt='buywhite'></img> </div>
                        <div className='container__price'>
                            <div className='d-flex'>  <h3 className='cost__card'>{cost}</h3> <img src={Coin} alt='Coin' ></img></div>
                            <div>

                                {
                                   
                                        points >= data.cost ?
                                         (
                                            statusBuy? <button  className='btn__redeem'>Loading...</button>  
                                            : 
                                            <button onClick={()=>buy()} className='btn__redeem'>Redeem now</button> 
                                             
                                         )
                                        :
                                        <button className='btn__redeem btn__redeem__not'>Need more coins 😔</button>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ItemContainer