import React from "react";
import { Col, Row } from "react-bootstrap";
import { BIO_BLURB } from "../../strings";

const BioSegment: React.FC = () => {
  return (
    <Row className="row justify-content-center py-6">
      <Col xl={4} className="fs-4">
        <h1 className="display-1">Hi, I'm Anthony.</h1>
        <p>{BIO_BLURB}</p>
      </Col>
      <Col xl={1} />
      <Col xl={4}>
        <img
          src="/images/headshot.jpeg"
          className="mw-80 rounded float-right"
          alt="Responsive image"
        />
      </Col>
    </Row>
  );
};

export default BioSegment;
