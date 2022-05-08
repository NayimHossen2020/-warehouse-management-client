import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './SafeStorage.css';

const SafeStorage = () => {
    return (
        <Container className='py-5'>
            <div className='inventory-title'>
                <p>Our Specialty</p>
                <h1>Why choice Us</h1>
            </div>
            <Row>
                <Col sm={12} md={5}>
                    <div>
                        <img className='img-fluid' src="https://i.ibb.co/Y2D0Yv7/istockphoto-866419560-170667a-removebg-preview.png" alt="" />
                    </div>
                </Col>
                <Col sm={12} md={7}>
                    <Row>
                        <div>
                            <h1>Safe, secure, reliable and affordable storage service</h1>
                            <p>SafeStorage is storage space provider to stow all your household items with state of the art security facilities, Catering exclusive cheap storage solutions ranging from Household items storage to Records storage management. We are a one stop destination for all your storage needs. If you are traveling, renovating your house, running out of space or looking for storage units or storage spaces for rent for your households and automobiles, self storage near me.You will find storage warehouse for rent in Hyderabad, Bangalore, Pune, Chennai and Mumbai at genuine price.</p>
                        </div>
                    </Row>
                    <Row>
                        <Col sm={6} md={6}>
                            <Card className='mb-3'>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Biometric System Access</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Barcode Tracking System</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Pest Control</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Pickup from Door Step</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col sm={6} md={6}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Insurance Coverage</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> Fire Control</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> CCTV Monitoring</ListGroup.Item>
                                    <ListGroup.Item><BsFillArrowRightCircleFill className='icon-style' /> 24/7 Security</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SafeStorage;