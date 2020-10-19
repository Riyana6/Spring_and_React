import React, {Component} from'react';
import {Card,Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class BookList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((data) => {
                this.setState({books: data});
            })
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList}/>BookList</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr> 
                                <th>Title</th>
                                <th>Aurthor</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td colSpan="6">{this.state.books.length} Books Available.</td>
                            </tr>
                           
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
