import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
    return (
        <section
            className="about__section"
            style={
                aboutClass === "aboutPage"
                    ? { marginTop: "0px" }
                    : { marginTop: "280px" }
            }
        >
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">
                                Welcome to car rent service
                            </h2>
                            <p className="section__description">
                                Welcome to Car Rent Service, your premier car
                                rental solution! We're committed to making your
                                travel experience seamless, affordable, and
                                tailored to your needs. Whether you're planning
                                a business trip, family vacation, or weekend
                                getaway, we have the perfect vehicle for every
                                journey.
                            </p>

                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i>{" "}
                                    Diverse Fleet of Vehicles
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i>{" "}
                                    Affordable & Transparent Pricing
                                </p>
                            </div>

                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i>{" "}
                                    Flexible Rental Plans
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> 24/7
                                    Customer Support & Roadside Assistance
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
