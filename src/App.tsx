import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Spacer from "./components/Spacer";
import LogoCard from "./components/LogoCard/LogoCard";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* TODO: find a more BootStrap-thonic way of doing this */}
      <Container>
        <Spacer size={2} />
        <Row>
          <Col className="bio-blurb">
            <h1>Hi, I'm Anthony.</h1>
            <p>
              I'm a passionate Full Stack Software Engineer who loves bringing
              ideas to life. As a Co-Founder and Software Engineer at Fabric, I
              lead the charge in creating cool features using Ruby on Rails,
              Python, and React/TypeScript. Whether it's building a new platform
              for DoorDash or working on innovative projects like mindswarms,
              Inc., I thrive on crafting web applications that make a
              difference. I'm all about making tech fun and impactful. Let's
              connect and chat about how I can bring my energy and skills to
              your team! 😊✨
            </p>
          </Col>
          <Col>
            <img
              src="/images/skele.jpeg"
              className="rounded float-right"
              alt="Responsive image"
              style={{ maxWidth: "80%" }}
            />
          </Col>
        </Row>
        <Spacer size={2} />
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1 id="experience">Experience</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <LogoCard src="/images/fabric-logo-black.svg" />
          </Col>
          <Col lg={4}>
            <LogoCard src="/images/doordash-logo.svg" />
          </Col>
          <Col lg={4}>
            <LogoCard src="/images/interview-kickstart-logo.svg" />
          </Col>
        </Row>
        <Row class="justify-content-center">
          <Col lg={2} />
          <Col lg={4}>
            <LogoCard src="/images/mindswarms.svg" />
          </Col>
          <Col lg={4}>
            <LogoCard src="/images/primary-logo-white.svg" />
          </Col>
          <Col lg={2} />
        </Row>
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
