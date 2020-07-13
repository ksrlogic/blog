import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../Components/Sidebar";
import CardContainer from "./CardContainer";
import Oddments from "../Components/Oddments";
import NavBar from "../Components/NavBar";
const LayOut = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <SideBar />
          <NavBar />
          <Col xs={12} md={8} className="layout">
            <h1 className="mainHeader">Gallery</h1>
            <CardContainer />
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
