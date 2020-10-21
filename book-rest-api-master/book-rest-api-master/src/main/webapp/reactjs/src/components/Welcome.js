import React ,{Component} from'react';
import { Jumbotron} from 'react-bootstrap';

export default function Welcome extends Component {
    render() {
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Welcome to Book Shop</h1>
                <blockquote className="blockquote mb-0">
                    <p>
                        Good Friends, Good Books, and a sleepy conscience: this is the ideal life. 
                    </p>
                    <footer className="blockquote-footer">
                        Jeema Riyana
                    </footer>
                </blockquote>
            </Jumbotron>
        );
    }
}
