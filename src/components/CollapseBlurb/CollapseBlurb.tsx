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
  let textElems: any[] = []
  if (props.blurbText) {
    const lines = props.blurbText.split('\n').filter((l) => l)
    textElems = lines.map((line, index) => {
      if (index == 0) {
        return <h1>{line}</h1>
      }
      else if (line.startsWith("•")) {
        return <li>{line.slice(2)}</li>
      } else {
        return <p className='mt-0'>{line}</p>
      }
    })
  }
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
              <p className="bio-blurb">{textElems}</p>
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
