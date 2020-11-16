import React ,{Component} from'react';
import { Container, Col, Navbar} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        let fullyear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>
                            {fullyear},All Rights Reserved
                        </div>
                    </Col>
                </Container>
            </Navbar>

        );
    }
}



