import React from 'react'
import "./categories.scss"
import categoryimg1 from "../../images/category1.jpg"
import categoryimg2 from "../../images/category2.jpg"
import categoryimg3 from "../../images/category3.jpg"
import categoryimg4 from "../../images/category4.jpg"
import categoryimg5 from "../../images/category5.jpg"
import categoryimg6 from "../../images/category6.jpg"

export const Categories = () => {
    return (
        
        <div className='d-flex flex-column flex-lg-row  gap-2 m-2 categorycontainer'>
            <div className='col col-lg-3 d-flex flex-1 flex-row flex-lg-column gap-2 ' >
                <div className=' flex1 overflow-hidden position-relative' >
                    <button className='categoriesBtn'>Men</button>
                    <img className='categoryimg' src={categoryimg1} alt="category images" />
                </div>
                <div className=' flex1 overflow-hidden position-relative' >
                    <button className='categoriesBtn'>Women</button>
                    <img className='categoryimg' src={categoryimg2} alt="category images" />
                </div>
            </div>
            <div className='col col-lg-3 d-flex flex1 flex-column'>
                <div className=' flex1 overflow-hidden position-relative' >
                    <button className='categoriesBtn'>New Season</button>
                    <img className='categoryimghight' src={categoryimg5} alt="category images" />
                </div>
            </div>
            <div className='col  col-lg-6 d-flex flex2 flex-column gap-2'>
                <div className='d-flex gap-2 h-50' >
                    <div className=' overflow-hidden position-relative'>
                        <button className='categoriesBtn'>Sale</button>
                        <img className='categoryimg' src={categoryimg3} alt="category images" />
                    </div>
                    <div className=' overflow-hidden position-relative'>
                        <button className='categoriesBtn'>Accessories</button>
                        <img className='categoryimg' src={categoryimg4} alt="category images" />
                    </div>
                </div>
                <div className=' flex1 overflow-hidden position-relative'>
                    <button className='categoriesBtn'>Shoes</button>
                    <img className='categoryimg' src={categoryimg6} alt="category images" />
                </div>
            </div>
        </div>
        
    )
}
