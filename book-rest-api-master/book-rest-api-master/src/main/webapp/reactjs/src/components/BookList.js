import React, {Component} from'react';
import {Card,Table, Image, ButtonGroup , Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import axios from 'axios';

export default class BookList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books : []
        };
    }

    componentDidMount() {
        this.findAllBooks();
    }

    findAllBooks(){
        axios.get("http://localhost:8081/rest/books")
            .then(response => response.data)
            .then((data) => {
                this.setState({books: data});
            });
    };

    deleteBook = (bookId) => {
        axios.delete("http://localhost:8081/rest/books/" + bookId)
            .then(response => {
                if(response.data != null) {
                    this.setState({"show" : true});
                    setTimeout(() => this.setState({"show" : false}) , 3000);
                    this.setState({
                        books : this.state.books.filter(book => book.id !== bookId)
                    });
                } else {
                    this.setState({"show":false});
                }
            });
    };

    render() {
        return (
            <div>
                <div style = {{"display":this.state.show ? "block" : "none"}}>
                    <MyToast children = {{show:this.state.show, message:"Book Deleted Successfully",type:"danger"}} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList}/> BookList</Card.Header>
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
                            {
                                this.state.books.length === 0 ?
                                <tr align="center">
                                    <td colSpan="6">Books Available.</td>
                                </tr> :
                                    this.state.books.map((book) => (
                                <tr key={book.id}>
                                    <td>
                                        <Image src={book.coverPhotoURL} roundedCircle width="25" height="25"/>  {book.title}
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.isbnNumber}</td>
                                    <td>{book.price}</td>
                                    <td>{book.language}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>{'  '}
                                            {' '}<Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this,book.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                                ))
                            }
                           
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </div>
            
        );
    }
}
