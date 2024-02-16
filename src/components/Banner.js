import React from 'react';
import {banner, carousel} from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    return (
        <div className="container-fluid mb-3">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <div>
                        <Slider {...settings}>
                            {carousel.map((value, index) =>(
                                <div key={index}>
                                    <div
                                        style={{height: "430px"}}
                                    >
                                        <img
                                            className="position-absolute w-100 h-100"
                                            src={value.cover_img} alt="img"
                                        />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-between">
                                            <div className="p-3">
                                                <h1 className="display-4 text-white mb-3">{value.title}</h1>
                                                <p className="mx-md-5 px-5">{value.description}</p>
                                                <Link className={"btn btn-outline-light py-2 px-4 mt-3"}>{value.btn}</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="col-lg-4">
                    {banner.map((item, index) => (
                        <div className="product-offer mb-30" style={{ height: "200px" }}>
                            <img className="img-fluid" src={item.img} alt="iomg" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">{item.discount}</h6>
                                <h3 className="text-white mb-3">{item.title}</h3>
                                <Link className="btn btn-primary">
                                    {item.btn}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
