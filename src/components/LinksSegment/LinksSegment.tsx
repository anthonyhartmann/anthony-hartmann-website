import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  EnvelopeHeart,
  FileEarmarkPersonFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";

type LinksSegmentProps = {
  resumeOnClick: () => void;
  emailOnClick: () => void;
};

const LinksSegment: React.FC<LinksSegmentProps> = (props) => {
  return (
    <div className="py-5 text-black bg-secondary">
      <Row className="pb-4">
        <h1 id="links" className="text-center fw-bold">
          Links
        </h1>
      </Row>
      <Row className="row justify-content-center">
        <Col lg={1} className="d-flex justify-content-center">
          <Link
            to="https://github.com/anthonyhartmann/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
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
            className="text-white"
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
