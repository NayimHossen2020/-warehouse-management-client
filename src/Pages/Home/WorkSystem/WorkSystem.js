import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './WorkSystem.css';

const WorkSystem = () => {
    return (
        <Container className='py-4'>
            <div className='inventory-title'>
                <h1>How it Works</h1>
            </div>
            <Row className='gx-4'>
                <Col xs={6} md={3} className="mb-3">
                    <Card border="light" className="shadow-sm">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://i.ibb.co/JkNMpfR/1-box-removebg-preview.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>01</h1>
                                <h5 className='text-center fw-bold'>We pack assets at your home</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3} className="mb-3">
                    <Card border="light" className="shadow-sm">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://i.ibb.co/Y7w6vkk/picup-removebg-preview.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>02</h1>
                                <h5 className='text-center fw-bold'>We pick up from your door step</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card border="light" className="shadow-sm">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://i.ibb.co/nzhmGbr/images-removebg-preview.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>03</h1>
                                <h5 className='text-center fw-bold'>We store in our warehouse</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card border="light" className="shadow-sm">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://i.ibb.co/1TCSdv0/deliver-removebg-preview.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>04</h1>
                                <h5 className='text-center fw-bold'>We deliver when you need</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default WorkSystem;