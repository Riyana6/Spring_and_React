import React, {Component} from'react';
import {Card,Form,Button ,Col} from 'react-bootstrap';
export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state = {title:'', author:'', coverPhotoURL:'', isbnNumber:'', price:'', language:''}
    }

    submitBook(event) {
        alert(this.state.title);
        event.preventDefault();
    }

    bookChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Add Book</Card.Header>
                <Form onSubmit={this.submitBook} id="bookFormId" controlId="formGridTitle">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control required
                                     type="text" name="title"
                                     value={this.state.title}
                                     onChange={this.bookChange}
                                     className={"bg-dark text-white"} 
                                     placeholder="Enter Book Title" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Author</Form.Label>
                                <Form.Control 
                                    type="text" name="author" 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control 
                                    type="text" name="coverPhotoURL" 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Cover Photo URL" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>ISBN Number</Form.Label>
                                <Form.Control 
                                    type="text" name="isbnNumber" 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book ISBN Number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Price</Form.Label>
                                <Form.Control 
                                    type="text" name="price" 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Price" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Language</Form.Label>
                                <Form.Control 
                                    type="text" name="language" 
                                    className={"bg-dark text-white"} 
                                    placeholder="Enter Book Language" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}

