import React, { Component } from "react";
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {
    isOpen: false
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const linkStyle={
     margin:"10px",
     textDecoration:"none",
     color:"red",
     fontSize:"16px",
     lineHeight:"1.7em",
    };
    const logoStyle={
      width:"100px",height:"auto",
    }
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand tag={props => <NavLink to="/" style={linkStyle}{...props} />}>
              Reactjs
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle.bind(this)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem tag={props =>
                    <NavLink to="/about" style={linkStyle}{...props} />}>
                    About
                </NavItem>
                <NavItem tag={props => 
                  <NavLink to="/contact" style={linkStyle}{...props} />}>  
                    Contact
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Notification
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>notification 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>notification 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>notification 3</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav>
                <NavItem tag={props =><NavLink to="/user/signup"style={{fontSize:"16px",color:"red",textDecoration:"none"}} {...props} />} >
                    SignUp
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
