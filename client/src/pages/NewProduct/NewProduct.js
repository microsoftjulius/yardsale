import React, { Component } from 'react';
//import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Row, Column } from "../../components/Grid";
import FormContainer from "../../components/FormContainer"
import "./NewProduct.css";

class NewProduct extends Component {
    // Setting the initial values of ex: this.state.username
    state = {
        email: "",
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNum: ""
    };

    // handle any changes to the input fields
    handleListItemInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleListItemSubmit = event => {
        event.preventDefault();
        alert(`email: ${this.state.email}\nUsername: ${this.state.userName}\nItem: ${this.state.item}\nDescription: ${this.state.description}\nPhone Number: ${this.state.textAlertNum}\nPhone Number: ${this.state.price}}`);
        this.setState({ email: "", userName: "", item: "", desctiption: "", textAlertNum: "" });
    };

    render() {
        return (
            <FormContainer>
                <h1>New Item Listing</h1>

                <form>
                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-sm"
                                    placeholder="Confirm email"
                                    value={this.state.email}
                                    onChange={this.handleListItemInputChange}
                                />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    name="userName"
                                    className="form-control form-control-sm"
                                    placeholder="Confirm UserName to be Posted with Listing"
                                    value={this.state.userName}
                                    onChange={this.handleListItemInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Text Alert Cell Number</label>
                                <input
                                    type="number"
                                    name="textAlertNum"
                                    className="form-control form-control-sm"
                                    placeholder="Receive Text Alerts Placeholder"
                                    value={this.state.textAlertNum}
                                    onChange={this.handleListItemInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Item</label>
                                <input
                                    type="text"
                                    name="item"
                                    className="form-control form-control-sm"
                                    placeholder="Item Placeholder"
                                    value={this.state.item}
                                    onChange={this.handleListItemInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control form-control-sm"
                                    placeholder="Desctiption Placeholder"
                                    rows="5"
                                    value={this.state.description}
                                    onChange={this.handleListItemInputChange} />
                            </ Column>
                        </Row>
                    </div>

                    <div className="formgroup">
                        <Row>
                            <Column size="md-12">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control form-control-sm"
                                    placeholder="Price Placeholder"
                                    value={this.state.price}
                                    onChange={this.handleListItemInputChange} />
                            </ Column>
                        </Row>
                    </div>
                    <button type="submit" className="btn btn-primary listItem" onClick={this.handleListItemSubmit}>LIST ITEM</button>
                </form>
            </FormContainer >
        );
    }
}

export default NewProduct;