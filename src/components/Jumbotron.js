import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import peeps from '../assets/peeps.jpg'

const Styles = styled.div`
    .jumbo {
        background: url(${peeps}) no-repeat fixed bottom;
        background-size: cover;
        color: ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: white;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>I'm Claudia Marie</p>
            </Container>
        </Jumbo>
    </Styles>
)