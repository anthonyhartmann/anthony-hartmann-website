import React from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Check,
  EnvelopeHeart,
  FileEarmarkPersonFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";
import Spacer from "../Spacer";

type LinksSegmentProps = {
  resumeOnClick: () => void;
  emailOnClick: () => void;
};

const LinksSegment: React.FC<LinksSegmentProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#73FAC9",
        color: "black",
        paddingBottom: "10em",
      }}
    >
      <Spacer size={1} />
      <Row>
        <h1 id="links" className="text-center" style={{ fontWeight: "bold" }}>
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
          onClick={props.emailOnClick}
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
          <FileEarmarkPersonFill
            size={96}
            className="resume"
            onClick={props.resumeOnClick}
          />
        </Col>
      </Row>
    </div>
  );
};

export default LinksSegment;
