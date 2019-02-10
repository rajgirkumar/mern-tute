import React, { Component } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter
} from "reactstrap";

// child component

//import ChildComponent from '../childComonent';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const userPost = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/user", userPost)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Row>
            <Col xs="12" sm="12" md="12">
              <Card>
                <CardHeader>
                  <h4>Sign Up</h4>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmitHandler}>
                    <Row>
                      <Col xs="12" sm="6" md="6">
                        <Input type="hidden" />
                        <Card>
                          <CardHeader>First Name*</CardHeader>
                          <CardBody>
                            <Input
                              type="text"
                              placeholder="enter firstname"
                              value={this.state.firstName}
                              onChange={e =>
                                this.setState({ firstName: e.target.value })
                              }
                            />
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="6">
                        <Card>
                          <CardHeader>Last Name*</CardHeader>
                          <CardBody>
                            <Input
                              type="text"
                              placeholder="enter lastname"
                              value={this.state.lastName}
                              onChange={e =>
                                this.setState({ lastName: e.target.value })
                              }
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <div style={{ marginTop: "5px" }}>
                      <Row>
                        <Col xs="12" sm="6" md="6">
                          <Card>
                            <CardHeader>Email*</CardHeader>
                            <CardBody>
                              <Input
                                type="text"
                                placeholder="enter email"
                                value={this.state.email}
                                onChange={e =>
                                  this.setState({ email: e.target.value })
                                }
                              />
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xs="12" sm="6" md="6">
                          <Card>
                            <CardHeader>Password*</CardHeader>
                            <CardBody>
                              <Input
                                type="password"
                                placeholder="enter password"
                                value={this.state.password}
                                onChange={e =>
                                  this.setState({ password: e.target.value })
                                }
                              />
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                    <div style={{ marginTop: "5px", textAlign: "center" }}>
                      <Button size="lg" color="success">
                        Save
                      </Button>
                    </div>
                  </Form>
                </CardBody>
                <CardFooter>Registration of New User</CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Signup;
