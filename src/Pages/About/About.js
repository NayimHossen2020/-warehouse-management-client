import React from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SafeStorage from '../Home/SafeStorage/SafeStorage';
import './About.css';

const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <Container>
                <SafeStorage />
            </Container>
        </div>
    );
};

export default About;