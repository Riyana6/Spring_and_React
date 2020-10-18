import React , {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img alt="book" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width="25" height="25"/>Book Shop
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                </Nav>
            </Navbar>
        );
    }
}

