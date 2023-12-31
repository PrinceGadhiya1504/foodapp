import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" id="carousel">
                <div className="carousel-caption" style={{zIndex:"10"}}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="search" aria-label="Search"/>
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{filter: "brightness(50%)" }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?moms" className="d-block w-100" style={{filter: "brightness(50%)" }} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?sea" className="d-block w-100" style={{filter: "brightness(50%)" }} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
