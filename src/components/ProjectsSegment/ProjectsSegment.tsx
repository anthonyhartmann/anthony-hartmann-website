import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Spacer from "../Spacer";
import { META_DESC, TAROT_DESC } from "../../strings";

type ProjectsSegmentProps = {
  handleOpenCollapse: (
    index: number,
    imagePath: string,
    collapseText: string
  ) => void;
  collapseIndex: number;
  collapseImage: string;
  collapseText: string;
};

const ProjectsSegment: React.FC<ProjectsSegmentProps> = (props) => {
  return (
    <div>
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
              props.handleOpenCollapse(5, "/images/tarot.png", TAROT_DESC)
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
              props.handleOpenCollapse(6, "/images/meta.png", META_DESC)
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
    </div>
  );
};

export default ProjectsSegment;
