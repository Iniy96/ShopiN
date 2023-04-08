import React from 'react'
import featuredproduct1 from "../../images/featuredproduct1.jpg"
import featuredproduct2 from "../../images/featuredproduct2.jpg"
import featuredproduct3 from "../../images/featuredproduct3.jpg"
import featuredproduct4 from "../../images/featuredproduct4.jpg"
import { FeaturedProductCard } from './FeaturedProductCard'

const featuredProductslist = [
    {
        id:1,
        image:featuredproduct1,
        productName:"Watch",
        oldPrice:35,
        newPrice:30
    },
    {
        id:2,
        image:featuredproduct2,
        productName:"Cream",
        oldPrice:8,
        newPrice:5
    },
    {
        id:3,
        image:featuredproduct3,
        productName:"Women Dress",
        oldPrice:25,
        newPrice:17
    },
    {
        id:4,
        image:featuredproduct4,
        productName:"Coat",
        oldPrice:15,
        newPrice:12
    },
]

export const FeaturedProducts = () => {
    return (
        <div className='mt-5 text-center'>
            <h3 >Featured Products</h3>
            <div className='row justify-content-center mt-3 p-2 gap-3'>
                {
                    featuredProductslist.map((product)=>{
                        return <FeaturedProductCard key={product.id} product={product}/>
                    })
                }
            </div>
            
        </div>

       
  )
}
