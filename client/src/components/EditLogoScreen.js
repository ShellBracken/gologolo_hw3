import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize
                backgroundColor: $backgroundColor
                borderColor: $borderColor
                borderRadius: $borderRadius
                borderWidth: $borderWidth
                padding: $padding
                margin: $margin) {
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {

    render() {
        let text, color, fontSize, backgroundColor, borderColor, borderRadius, borderWidth, padding, margin;
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <Navbar variant="light">
                                                <Navbar.Brand>
                                                    <h3 className="panel-title">
                                                        Edit Logo
                                                    </h3>
                                                </Navbar.Brand>
                                                <Nav className="mr-auto">
                                                    <h4><Link to="/">Home</Link></h4>
                                                </Nav>
                                            </Navbar>
                                        </div>
                                        <div className="panel-body">   
                                        <div className="row">
                                        <div class="card">
                                        <div class="card-body">                                     
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id, text: text.value, color: color.value, fontSize: parseInt(fontSize.value),
                                                    backgroundColor: backgroundColor.value, borderColor: borderColor.value, borderRadius: parseInt(borderRadius.value),
                                                    borderWidth: parseInt(borderWidth.value), padding: parseInt(padding.value), margin: parseInt(margin.value) } });
                                                text.value = "";
                                                color.value = "";
                                                fontSize.value = "";
                                                backgroundColor.value = "";
                                                borderColor.value = "";
                                                borderRadius.value = "";
                                                borderWidth.value = "";
                                                padding.value = "";
                                                margin.value = "";                        
                                            }}>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="text">Text:</label>
                                                        </div>
                                                        <div className="col s8">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="text"
                                                            ref={(node) => {
                                                            text = node;
                                                            }}
                                                            placeholder="Text"
                                                            defaultValue={data.logo.text}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="color">Color:</label>
                                                        </div>
                                                        <div className="col s8">
                                                        <input
                                                            type="color"
                                                            className="form-control"
                                                            name="color"
                                                            ref={(node) => {
                                                            color = node;
                                                            }}
                                                            placeholder="Color"
                                                            defaultValue={data.logo.color}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="fontSize">Font Size:</label>
                                                        </div>
                                                        <div className="col s8">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="fontSize"
                                                            ref={(node) => {
                                                            fontSize = node;
                                                            }}
                                                            placeholder="Font Size (2-144)"
                                                            defaultValue={data.logo.fontSize}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="backgroundColor">Background Color:</label>
                                                        </div>
                                                        <div className="col s8">
                                                        <input
                                                            type="color"
                                                            className="form-control"
                                                            name="backgroundColor"
                                                            ref={(node) => {
                                                            backgroundColor = node;
                                                            }}
                                                            placeholder="Background Color"
                                                            defaultValue={data.logo.backgroundColor}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="borderColor">Border Color:</label>
                                                        </div>
                                                        <div className="col s8">
                                                        <input
                                                            type="color"
                                                            className="form-control"
                                                            name="borderColor"
                                                            ref={(node) => {
                                                            borderColor = node;
                                                            }}
                                                            placeholder="Border Color"
                                                            defaultValue={data.logo.borderColor}
                                                        />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="borderRadius">Border Radius:</label>
                                                        </div>
                                                        <div className="col s8" class="form-inline">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="borderRadius"
                                                            ref={(node) => {
                                                            borderRadius = node;
                                                            }}
                                                            placeholder="Border Radius (5-20)"
                                                            defaultValue={data.logo.borderRadius}
                                                        />px
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="borderWidth">Border Width:</label>
                                                        </div>
                                                        <div className="col s8" class="form-inline">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="borderWidth"
                                                            ref={(node) => {
                                                            borderWidth = node;
                                                            }}
                                                            placeholder="Border Width (2-5)"
                                                            defaultValue={data.logo.borderWidth}
                                                        />px
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4">
                                                        <label htmlFor="padding">Padding:</label>
                                                        </div>
                                                        <div className="col s8" class="form-inline">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="padding"
                                                            ref={(node) => {
                                                            padding = node;
                                                            }}
                                                            placeholder="Padding (2-30)"
                                                            defaultValue={data.logo.padding}
                                                        />px
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="form-group">
                                                    <div className="row">
                                                        <div className="col s4" >
                                                        <label htmlFor="margin">Margin:</label>
                                                        </div>
                                                        <div className="col s8" class="form-inline">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            name="margin"
                                                            ref={(node) => {
                                                            margin = node;
                                                            }}
                                                            placeholder="Margin (2-30)"
                                                            defaultValue={data.logo.margin}
                                                        />px
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-success">
                                                    Submit
                                                    </button>
                                            </form>
                                            {loading && <p>Loading...</p>}
                                            {error && <p>Error :( Please try again</p>}
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;