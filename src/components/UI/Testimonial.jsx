import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Car Rent Service made my business trip stress-free and
                    efficient! The booking process was quick, and the car was in
                    perfect condition. I'll definitely be using their services
                    again!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Jhon</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    I rented an SUV for a family road trip, and it was a
                    fantastic experience. The car was clean, comfortable, and
                    spacious. We enjoyed unlimited miles and had peace of mind
                    with the 24/7 support. Highly recommended!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Lisa</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    Amazing service! I needed a last-minute airport transfer,
                    and Car Rent Service delivered. They were prompt,
                    professional, and made sure I arrived with time to spare.
                    Truly impressed by their reliability.
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Tim</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className="section__description">
                    The city tour option was fantastic for my friends and me—we
                    got to explore every corner of the city without worrying
                    about mileage or parking. I'll choose Car Rent Service every
                    time I'm in town!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Harry</h6>
                        <p className="section__description">Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonial;
