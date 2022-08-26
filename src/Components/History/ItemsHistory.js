import React from 'react'
import Coin from '../../assets/icons/coin.svg'
const ItemsHistory = ({ data }) => {

    const { _id, name, img, createDate, cost,category} = data
    const date = new Date(createDate).toLocaleString()

    return (
        <>
            <section className=' section__item__history col-md-12    my-5 d-flex '>
                <img  className=' img__history col-md-2' src={img?.url} alt={name} />
               <section className=' justify-content-around  d-flex align-items-center section__item__history col-md-10 '>

                <article className=' container__article__history__2 d-flex flex-column align-items-center justify-content-center '>
       
                    <h5>{category}</h5>
                    <p className='text-muted'>{name} </p> 
            
                </article>
                
                <article className=' container__article__history d-flex flex-column align-items-center justify-content-center'>
                    <h5>Date</h5>
                    <p className='text-muted'> {date}</p>

                </article>

                <article className=' container__article__history d-flex flex-column align-items-center justify-content-center'>
                    <h5>Cost</h5>
                    <div className='d-flex align-items-center'> 
                     <p className='text-muted'>{cost}</p>
                    <img  src={Coin} style={{width:'20px', marginTop:'-11px'}} alt='Coin'></img>
                    </div>
                </article>

                <article className=' container__article__history d-flex flex-column align-items-center justify-content-center'>
                    <h5>Id Product</h5>
                    <p className='text-muted'>{_id}</p>
                </article>
               </section>

            </section>
        </>
    )
}

export default ItemsHistory