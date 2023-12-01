import React from 'react'
import {
  Col,
  Row,
} from "react-bootstrap";
import Spacer from "../Spacer";
import {
  BIO_BLURB
} from "../../strings";

const BioSegment: React.FC = () => {
    return (
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
    )
}

export default BioSegment