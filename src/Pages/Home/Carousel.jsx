import React from 'react'
import carrouselimg1 from "../../images/carousel1.jpg"
import carrouselimg2 from "../../images/carousel2.jpg"
import carrouselimg3 from "../../images/carousel3.jpg"
import carrouselimg4 from "../../images/carousel4.jpg"
import "./carousel.scss"

export const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img src={carrouselimg1} className="d-block w-100" alt="slide 1" />
                </div>
                <div className="carousel-item" >
                    <img src={carrouselimg2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={carrouselimg3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" >
                    <img src={carrouselimg4} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
