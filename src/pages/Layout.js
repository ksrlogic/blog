import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../Components/Sidebar";
import CardContainer from "./CardContainer";
import Oddments from "../Components/Oddments";
import NavBar from "../Components/NavBar";
import CreatePage from "./CreatePage";
import { Route } from "react-router-dom";
import PostPage from "./PostPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
const LayOut = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <SideBar />
          <NavBar />
          <Col xs={12} md={8} className="layout">
            <h1 className="mainHeader">Gallery</h1>
            <Route exact path="/" component={CardContainer} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/post/:id" component={PostPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Col>
          <Col className="" xs={12} md={1}>
            <Oddments />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LayOut;
