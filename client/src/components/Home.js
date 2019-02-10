import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../App.css";
import { Container, Table, Card, CardBody, CardHeader } from "reactstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      isLoading: true,
      users: []
      //   error: null
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("/api/user")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  }
  
  tabRow() {
    return (
      <tbody>
        {this.state.isLoading && this.state.users.map(function(object, i) {
          return (
            <tr key={i}>
              <td>{object.firstName}</td>
              <td>{object.lastName}</td>
              <td>{object.email}</td>
              <td><Link to="/user/edit/:id"><button>Edit</button></Link></td>
              <td>Remove</td>
            </tr>
          );
        })
        }
      </tbody>
    );
  }
  render() {
    console.log("render");
    return (
      <div>
        <Container>
          <Card>
            <CardHeader>
              <h3>User List</h3>
            </CardHeader>
            <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {this.tabRow()}
              </Table>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Home;
