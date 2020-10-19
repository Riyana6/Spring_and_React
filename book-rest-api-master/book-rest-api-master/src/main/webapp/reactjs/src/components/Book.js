import React, {Component} from'react';
import {Card,Form,Button ,Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare ,faUndo} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    initialState = {
        title:'', author:'', coverPhotoURL:'', isbnNumber:'', price:'', language:''
    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }
    submitBook = event => {
        alert('Title: '+this.state.title+', Author: '+this.state.author+', Cover Phtoto URL: '+this.state.coverPhotoURL+', ISBN Number: '+this.state.isbnNumber+', Price: '+this.state.price+', Language: '+this.state.language);
        event.preventDefault();

        const book = {
            title: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language
        }; 

        axios.post("", book)
            .then(response => {
                if(response.daye != null) {
                    this.setState(this.initialState);
                    alert("Book Saved Successfully");
                }
            });
    }

    bookChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {
        const {title,author,coverPhotoURL,isbnNumber,price,language} = this.state;
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/> Add Book</Card.Header>
                <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required autoComplete="off"
                                     type="text" name="title"
                                     value={title}
                                     onChange={this.bookChange}
                                     className={"bg-dark text-white"} 
                                     placeholder="Enter Book Title" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAuthor">
                                <Form.Label>Author</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="author"
                                    value={author}
                                    onChange={this.bookChange} 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Author" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="coverPhotoURL"
                                    value={coverPhotoURL}
                                    onChange={this.bookChange} 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Cover Photo URL" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridISBNNumber">
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="isbnNumber" 
                                    value={isbnNumber}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book ISBN Number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="price"
                                    value={price}
                                    onChange={this.bookChange} 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Price" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLanguage">
                                <Form.Label>Language</Form.Label>
                                <Form.Control required autoComplete="off"
                                    type="text" name="language"
                                    value={language}
                                    onChange={this.bookChange} 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Language" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave}/> Submit
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}

