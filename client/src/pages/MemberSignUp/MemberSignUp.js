import React, { Component } from 'react';
import API from "../../utils/API";
// import { Redirect } from 'react-router';
// import { Link } from "react-router-dom";
import { Row, Column } from "../../components/Grid";
import { FormContainer } from "../../components/Form";
import Frame from "../../components/Frame";
import "./MemberSignUp.css";

class MemberSignUp extends Component {
    constructor(props) {
    super(props);
        // Setting the initial values of ex: this.state.username
        this.state = {
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNum: ""
        }
    };

    loadNewMembers = () => {
        //alert(`You are signed up!\nemail: ${this.state.email}\nUsername: ${this.state.username}\nPassword: ${this.state.password}\nFirst Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nPhone Number: ${this.state.phoneNum}`)
        this.setState({ email: "", username: "", password: "", firstName: "", lastName: "", phoneNum: "" })
        //window.location.href = '/products';
    }

    // handle any changes to the input fields
    handleNewMemberInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleNewMemberFormSubmit = event => {
        event.preventDefault();
        if (!this.state.email) {
            alert("Enter your email address!");
        } else if (!this.state.username) {
            alert(`Enter your username!`);
        } else if (!this.state.password) {
            alert(`Enter your password!`);
        } else if (!this.state.firstName) {
            alert(`Enter your first name!`);
        } else if (!this.state.lastName) {
            alert(`Enter your last name!`);
        } else if (!this.state.username) {
            alert(`Enter your username!`);
        } else if (!this.state.phoneNum) {
            alert(`Enter your phone number!`);
        } else {
            API.saveMember({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNum: this.state.phoneNum
            })
                .then(res => this.loadNewMembers())
                .catch(err => console.log(err));

        }
    };


    render() {
        return (
            <Frame>
            <FormContainer>
                <h3>Member Enrollment Form</h3>
                <form>
                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-sm"
                                    placeholder="email@signup.com"
                                    value={this.state.email}
                                    onChange={this.handleNewMemberInputChange}
                                />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-6">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control form-control-sm"
                                    placeholder="Posted with any Listing"
                                    value={this.state.username}
                                    onChange={this.handleNewMemberInputChange} />
                            </ Column>
                            <Column size="md-6">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password Placeholder"
                                    value={this.state.password}
                                    onChange={this.handleNewMemberInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control form-control-sm"
                                    placeholder="First Name Placeholder"
                                    value={this.state.firstName}
                                    onChange={this.handleNewMemberInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control form-control-sm"
                                    placeholder="Last Name Placeholder"
                                    value={this.state.lastName}
                                    onChange={this.handleNewMemberInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNum"
                                    className="form-control form-control-sm"
                                    placeholder="Phone Number Placeholder"
                                    value={this.state.phoneNum}
                                    onChange={this.handleNewMemberInputChange} />
                            </ Column>
                        </Row>
                    </div>
                    <div className="buttonHolder">
                    <button type="submit" className="btn  newMember" onClick={this.handleNewMemberFormSubmit}>SIGN UP</button>
                    </div>
                </form>
            </FormContainer>
            </Frame>
        );
    }
}

export default MemberSignUp;