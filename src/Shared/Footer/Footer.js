import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='bg-white pt-5 pb-2'>
            <Container>
                <Row className="d-flex align-items-center mb-3 wow fadeInUp">
                    <Col sm={12} md={3}>
                        <div className='d-flex justify-content-center'>
                            <img src="https://safestorage.in/assets/new_design_css/img/logo.png" className="img-fluid" />
                        </div>
                    </Col>
                    <Col sm={12} md={9}>
                        <Row className="form-row d-flex justify-content-end">
                            <Col sm={6} xl={4} lg={5} className="col-xl-4 col-lg-5 col-sm-6 col-12 text-sm-right text-left mt-sm-0 mt-4">
                                <div className="media d-flex align-items-center text-left">
                                    <img src="https://safestorage.in/assets/new_design_css/img/s_phone.png" className="img-fluid mr-3" />
                                    <div className="media-body">
                                        <p className="mb-1">Give Us a Call</p>
                                        <h5 className="bold m-0">+91 8088848484</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} xl={4} className="col-12 text-sm-right text-left mt-sm-0 mt-4">
                                <div className="media d-flex align-items-center text-left">
                                    <img src="https://safestorage.in/assets/new_design_css/img/s_mail.png" className="img-fluid mr-3" />
                                    <div className="media-body">
                                        <p className="mb-1">Send Us a Message</p>
                                        <h5 className="bold m-0">info@safestorage.in</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <p className="text-center fw-bold">© Copyright SafeStorage.in 2015-2021 | All rights reserved.</p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;