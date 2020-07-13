import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #f8f9fa;
    }

    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #17a2b8;

        &:hover {
            color: white;
        }
    }
`;

export const Navigation = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Hello</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/work">Work</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/resume">Resume</Link></Nav.Link>
                    </Nav.Item>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
    </Styles>
)