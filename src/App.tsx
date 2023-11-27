import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Spacer from "./components/Spacer";
import LogoCard from "./components/LogoCard/LogoCard";
import { Col, Collapse, Container, Row, Image } from "react-bootstrap";
import React from "react";
import {
  BIO_BLURB,
  DOORDASH_DESC,
  FABRIC_DESC,
  IK_DESC,
  MARQETA_DESC,
  MINDSWARMS_DESC,
} from "./strings";
import CollapseBlurb from "./components/CollapseBlurb/CollapseBlurb";

function App() {
  const [open, setOpen] = React.useState(false);
  // TODO: use less state variables
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapse2Open, setCollapse2Open] = React.useState(false);
  const [collapseImage, setCollapseImage] = React.useState("");
  const [collapseText, setCollapseText] = React.useState("");
  const [collapseIndex, setCollapseIndex] = React.useState(-1);

  const handleOpenCollapse = (
    index: number,
    imagePath: string,
    collapseText: string
  ) => {
    if (index < 3) {
      setCollapseOpen(index != collapseIndex);
      setCollapse2Open(false);
    } else {
      setCollapse2Open(index != collapseIndex);
      setCollapseOpen(false);
    }
    setCollapseImage(imagePath);
    setCollapseText(collapseText);
    setCollapseIndex(index == collapseIndex ? -1 : index);
  };

  return (
    <div className="App">
      <NavBar />
      {/* TODO: find a more BootStrap-thonic way of doing this */}
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row
          className="row justify-content-center"
          style={{
            backgroundColor: "rgb(18, 37, 64)",
            backgroundSize: "cover",
          }}
        >
          <Spacer size={8} />
          <Col xl={4} className="bio-blurb">
            <h1 className="display-1">Hi, I'm Anthony.</h1>
            <p>{BIO_BLURB}</p>
          </Col>
          <Col xl={1} />
          <Col xl={4}>
            <img
              src="/images/skele.jpeg"
              className="rounded float-right"
              alt="Responsive image"
              style={{ maxWidth: "80%" }}
            />
          </Col>
          <Spacer size={8} />
        </Row>
        <Spacer size={1} />
        <Row className="row justify-content-center">
          <Col xl={3}>
            <h1 style={{ textAlign: "center" }} id="experience">
              Experience
            </h1>
          </Col>
        </Row>
        <Row className="row justify-content-center">
          <Col lg={3}>
            <LogoCard
              src="/images/fabric-logo-black.svg"
              onClick={() =>
                handleOpenCollapse(
                  0,
                  "/images/fabric-logo-black.svg",
                  FABRIC_DESC
                )
              }
            />
          </Col>
          <Col lg={3}>
            <LogoCard
              src="/images/doordash-logo.svg"
              onClick={() =>
                handleOpenCollapse(
                  1,
                  "/images/doordash-logo.svg",
                  DOORDASH_DESC
                )
              }
            />
          </Col>
          <Col lg={3}>
            <LogoCard
              src="/images/interview-kickstart-logo.svg"
              onClick={() =>
                handleOpenCollapse(
                  2,
                  "/images/interview-kickstart-logo.svg",
                  IK_DESC
                )
              }
            />
          </Col>
        </Row>
        <CollapseBlurb
          in={collapseOpen}
          imagePath={collapseImage}
          blurbText={collapseText}
        />
        <Row className="row justify-content-center">
          <Col lg={3}>
            <LogoCard
              src="/images/mindswarms.svg"
              onClick={() =>
                handleOpenCollapse(3, "/images/mindswarms.svg", MINDSWARMS_DESC)
              }
            />
          </Col>
          <Col lg={3}>
            <LogoCard
              src="/images/primary-logo-white.svg"
              onClick={() =>
                handleOpenCollapse(
                  4,
                  "/images/primary-logo-white.svg",
                  MARQETA_DESC
                )
              }
            />
          </Col>
        </Row>
        <CollapseBlurb
          in={collapse2Open}
          imagePath={collapseImage}
          blurbText={collapseText}
        />
        <Spacer size={2} />
        <Row>
          <h1 id="projects" className="text-center">
            Projects
          </h1>
        </Row>
        <Spacer size={2} />
        <Row>
          <h1 id="links" className="text-center">
            Links
          </h1>
        </Row>
        <Spacer size={2} />
      </Container>
    </div>
  );
}

export default App;
