import React from 'react';
import {
	Container,
	Row, Col, Form,
	Input, Button,
    FormGroup, Label,FormText,
    Card,CardHeader,CardText,
    CardBody,CardFooter} from "reactstrap";
import avtar from "./avatar2.png"
const About= ()=> {
  const profileStyle={
    width:"100%",
    height:"250px",
  };
	return(
		<div className="container-fluid">
		    <h2 style={{textAlign:"center",lineHeight:"2em"}}>About Us</h2>
            <Container style={{paddingTop:"2rem"}}>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                      <Row>
                         <Col xs="6" sm="8" md="8">
                            <h4>what a'm i do</h4>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                         </Col>
                         <Col xs="6" sm="4" md="4">
                          <Card outline color="danger">
                             <CardHeader>About me</CardHeader>
                             <CardBody>
                                <img src={avtar} style={profileStyle} alt="" />
                                <CardText>
                                  Name:Mohan<br/>
                                  Position:Web Developer
                                </CardText>
                             </CardBody>
                             <CardFooter>some thing about me</CardFooter>
                          </Card>
                         </Col>
                      </Row>
                      <hr />
                      <div>
                          <Row>
                               <Col xs="12" sm="12" md="12">
                                <Form>
                                    <FormGroup row>
                                       <Label for="name" sm={2}>Name</Label>
                                       <Col sm={10}>
                                          <Input type="text" name="name" id="name" placeholder="enter name" />
                                       </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                       <Label for="exampleEmail" sm={2}>Email</Label>
                                        <Col sm={10}>
                                           <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                        </Col>
                                    </FormGroup>
                                    
                                    <FormGroup row>
                                        <Label for="exampleText" sm={2}>Message</Label>
                                        <Col sm={10}>
                                            <Input type="textarea" name="text" id="exampleText" placeholder="message" />
                                        </Col>
                                    </FormGroup>
        
                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                           <Button>Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                               </Col>
                          </Row>
                      </div>
                    </Col>
                </Row>
            </Container>
		</div>);
}

export default About;