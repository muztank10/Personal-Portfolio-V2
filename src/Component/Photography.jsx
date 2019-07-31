import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Photography.css';
import Sidebar from "./Sidebar";
import * as firebase from "firebase/app";

class Photography extends Component {
    render() {
        return (
            <div className="Photography-wrap">
                <Container className="Photography">
                    <Row>
                        <Col lg={1}>
                            <Sidebar />
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Photography</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Photography;
