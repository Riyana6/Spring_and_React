import React from 'react';
import {Navbar} from 'react-bootstrap';
class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/"><img alt="book" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width="25" height="25"/>Book Shop</Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavigationBar;