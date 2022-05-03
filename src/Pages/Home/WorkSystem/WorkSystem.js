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
                <Col xs={6} md={3}>
                    <Card border="light">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://safestorage.in/upload/home/how_it_work/flow1.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>01</h1>
                                <h5 className='text-center fw-bold'>We pack assets at your home</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card border="light">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://safestorage.in/upload/home/how_it_work/flow2.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>02</h1>
                                <h5 className='text-center fw-bold'>We pick up from your door step</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card border="light">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://safestorage.in/upload/home/how_it_work/flow3.png" alt="" />
                                </div>
                                <h1 className='text-center fw-bold py-1 text-style'>03</h1>
                                <h5 className='text-center fw-bold'>We store in our warehouse</h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={3}>
                    <Card border="light">
                        <Card.Body>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <img className='img-fluid' style={{ height: "100px" }} src="https://safestorage.in/upload/home/how_it_work/flow4.png" alt="" />
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