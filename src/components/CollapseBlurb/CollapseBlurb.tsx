import React from "react";
import { Col, Collapse, Container, Image, Row } from "react-bootstrap";
import Spacer from "../Spacer";

type CollapseBlurbProps = {
  in: boolean;
  imagePath: string;
  blurbText: string;
  wide?: boolean;
};

const CollapseBlurb: React.FC<CollapseBlurbProps> = (props) => {
  return (
    <Collapse in={props.in} dimension="height">
      <div>
        <Container fluid style={{ margin: 0, padding: 0 }}>
          <Row className="row justify-content-center align-items-center">
            <Spacer size={1} />
            <Col xl={3}>
              <Image fluid src={props.imagePath} />
            </Col>
            <Col md={1} />
            <Col xl={props.wide ? 7 : 3}>
              <p className="bio-blurb">{props.blurbText}</p>
            </Col>
            <Spacer size={1} />
          </Row>
        </Container>
      </div>
    </Collapse>
  );
};

CollapseBlurb.defaultProps = {
  wide: false,
};

export default CollapseBlurb;
