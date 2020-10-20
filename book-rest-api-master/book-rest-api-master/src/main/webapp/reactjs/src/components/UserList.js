import React , {Component} from 'react';
import {Card,Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            currentPage : 1,
            usersPerPage : 5
        };
    }

    componentDidMount() {
        this.findAllRandomUsers();
    }

    findAllRandomUsers(){
        axios.get("http://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
            .then(response => response.data)
            .then((data) => {
                this.setState({users: data});
            });
    };

    render() {

        const {users, currentPage, usersPerPage} = this.state;

        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUsers}/> UserList
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Address</td>
                                    <td>Created</td>
                                    <td>Balance</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.users.length === 0 ?
                                    <tr align = "center">
                                        <td colSpan = "6"> No Users Available
                                        </td>
                                    </tr> :
                                    this.state.users.map((user, index) => (
                                        <tr key ={index}>
                                            <td>{user.first}{'  '}{user.last}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address}</td>
                                            <td>{user.created}</td>
                                            <td>{user.balance}</td>
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