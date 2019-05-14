import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('The value is: ' + this.email.value);
        alert('The value is: ' + this.pass1.value);
        alert('The value is: ' + this.pass2.value);
        e.preventDefault();
    }

    render() {
        return (
            <div className="row h-100">
                <div className="col-8 offset-2 my-auto">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={(input) => this.email = input} placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={(input) => this.pass1 = input} placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={(input) => this.pass2 = input} placeholder="Password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
