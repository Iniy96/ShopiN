import React from 'react'

export const FeaturedProductCard = ({product}) => {
  return (
    <div className="card  col-5 col-md-4  col-lg-3 col-xl-2 bg-tertiary">
                <div className="text-center p-2 px-0 ">
                    <img
                        src={product.image}
                        className="object-fit-contain position-relative"
                        alt="..."
                        style={{ width: "100%", height: "100%" }}
                    />
                    <span className='position-absolute bg-white p-1 rounded' style={{top:"15px",left:"20px",fontSize:"11px"}}>Hot!</span>
                </div>
                <div className="card-body d-flex flex-column  ">
                    <div className="mt-auto text-start">
                        <h5 className="card-title">{product.productName} </h5>
                        <div className='row d-flex align-items-center'>
                            <div className='card-text text-decoration-line-through text-muted col-3 pe-0 '>${product.oldPrice}</div>
                            <div className='card-text col-9  fw-bold fs-5'>${product.newPrice}</div>

                        </div>
                        
                    </div>
                </div>
            </div>
  )
}
