import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img alt="book" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width="25" height="25"/>Book Shop
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Add Book</Nav.Link>
                    <Nav.Link href="#">Book List</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;