import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Spacer from "./components/Spacer";
import LogoCard from "./components/LogoCard/LogoCard";
import {
  Button,
  Col,
  Collapse,
  Container,
  Modal,
  Row,
  Image,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  EnvelopeHeart,
  FileEarmarkPersonFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";
import {
  BIO_BLURB,
  DOORDASH_DESC,
  FABRIC_DESC,
  IK_DESC,
  MARQETA_DESC,
  META_DESC,
  MINDSWARMS_DESC,
  TAROT_DESC,
} from "./strings";
import CollapseBlurb from "./components/CollapseBlurb/CollapseBlurb";

function App() {
  const collapseRanges: Map<number, number> = new Map<number, number>([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 1],
    [4, 1],
    [5, 2],
    [6, 2],
  ]);
  const [collapseImage, setCollapseImage] = React.useState("");
  const [collapseText, setCollapseText] = React.useState("");
  const [collapseIndex, setCollapseIndex] = React.useState<number>(-1);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");
  const [showConfirmDownload, setShowConfirmDownload] = React.useState(false)

  const handleOpenCollapse = (
    index: number,
    imagePath: string,
    collapseText: string
  ) => {
      setCollapseIndex(index == collapseIndex ? -1 : index);
      setCollapseImage(imagePath);
      setCollapseText(collapseText);
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-end"
        style={{ position: "fixed", margin: "10px" }}
      >
        <Toast
          style={{
            backgroundColor: "mediumseagreen",
            zIndex: "2",
          }}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body style={{ fontSize: "1.1em" }}>
            <Check size={30} color="#076620" style={{ margin: "0 6 2 0" }} />
            {toastMsg}
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <NavBar />
      <Modal show={showConfirmDownload} onHide={() => setShowConfirmDownload(false)}>
      <Modal.Header closeButton>
          <Modal.Title>Confirm Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>Would you like to download my resume?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowConfirmDownload(false)}>
            Not now
          </Button>
          <Button variant="secondary">
            <Link to="/files/resume.pdf" target="_blank" download onClick={() => setShowConfirmDownload(false)}>
              Yes!
            </Link>
          </Button>
        </Modal.Footer>
        </Modal>
      {/* TODO: find a more BootStrap-thonic way of doing this */}
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row className="row justify-content-center">
          <Spacer size={8} />
          <Col xl={4} className="bio-blurb">
            <h1 className="display-1">Hi, I'm Anthony.</h1>
            <p>{BIO_BLURB}</p>
          </Col>
          <Col xl={1} />
          <Col xl={4}>
            <img
              src="/images/headshot.jpeg"
              className="rounded float-right"
              alt="Responsive image"
              style={{ maxWidth: "80%" }}
            />
          </Col>
          <Spacer size={6} />
        </Row>
        <div
          style={{
            backgroundColor: "#73FAC9",
            color: "black",
            paddingBottom: "10em",
          }}
        >
          <Spacer size={1} />
          <Row className="row justify-content-center">
            <Col xl={12}>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
                id="experience"
              >
                Experience
              </h1>
            </Col>
          </Row>
          <Spacer size={1} />
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
            in={-1 < collapseIndex && collapseIndex <= 2}
            imagePath={collapseImage}
            blurbText={collapseText}
          />
          <Row className="row justify-content-center">
            <Col lg={3}>
              <LogoCard
                src="/images/mindswarms.svg"
                onClick={() =>
                  handleOpenCollapse(
                    3,
                    "/images/mindswarms.svg",
                    MINDSWARMS_DESC
                  )
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
            in={3 <= collapseIndex && collapseIndex < 5}
            imagePath={collapseImage}
            blurbText={collapseText}
          />
        </div>
        <Spacer size={4} />
        <Row>
          <h1
            id="projects"
            className="text-center"
            style={{ fontWeight: "bold" }}
          >
            Projects
          </h1>
        </Row>
        <Spacer size={3} />
        <Row className="row justify-content-center">
          <Col lg={3}>
            <Card
              onClick={() =>
                handleOpenCollapse(5, "/images/tarot.png", TAROT_DESC)
              }
            >
              <Card.Img variant="top" src="/images/tarot.png" />
              <Card.Text
                style={{
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "0.5em",
                }}
              >
                Tarot Tutor (Working Title)
              </Card.Text>
            </Card>
          </Col>
          <Col lg={3}>
            <Card
              onClick={() =>
                handleOpenCollapse(6, "/images/meta.png", META_DESC)
              }
            >
              <Card.Img variant="top" src="/images/meta.png" />
              <Card.Text
                style={{
                  backgroundColor: "white",
                  color: "black",
                  paddingLeft: "0.5em",
                }}
              >
                This website!
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <CollapseBlurb
          in={5 <= collapseIndex && collapseIndex <= 6}
          wide={true}
          imagePath={collapseImage}
          blurbText={collapseText}
        />
        <Spacer size={4} />

        <div
          style={{
            backgroundColor: "#73FAC9",
            color: "black",
            paddingBottom: "10em",
          }}
        >
          <Spacer size={1} />
          <Row>
            <h1
              id="links"
              className="text-center"
              style={{ fontWeight: "bold" }}
            >
              Links
            </h1>
          </Row>
          <Spacer size={1} />
          <Row className="row justify-content-center">
            <Col lg={1} className="d-flex justify-content-center">
              <Link
                to="https://github.com/anthonyhartmann/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
              >
                <Github size={96} className="github" />
              </Link>
            </Col>
            <Col
              lg={1}
              className="d-flex justify-content-center"
              onClick={() => {
                navigator.clipboard.writeText("anthonyhartmann395@gmail.com");
                setToastMsg("Email copied successfully.")
                setShowToast(true);
              }}
            >
              <EnvelopeHeart size={96} className="envHeart" />
            </Col>
            <Col lg={1} className="d-flex justify-content-center">
              <Link
                to="https://github.com/anthonyhartmann/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
              >
                <Linkedin size={96} className="linkedin" />
              </Link>
            </Col>
            <Col lg={1} className="d-flex justify-content-center">
                <FileEarmarkPersonFill size={96} className="resume" onClick={() => setShowConfirmDownload(true)}/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
