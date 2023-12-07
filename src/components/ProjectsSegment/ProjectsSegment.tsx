import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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
    <div className="py-5">
      <Row className="pb-4">
        <h1 id="projects" className="text-center fw-bold">
          Projects
        </h1>
      </Row>
      <Row className="row justify-content-center">
        <Col lg={3}>
          <Card
            onClick={() =>
              props.handleOpenCollapse(5, "/images/tarot.png", TAROT_DESC)
            }
          >
            <Card.Img variant="top" src="/images/tarot.png" />
            <Card.Text className="p-1 text-black bg-white">
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
            <Card.Text className="p-1 text-black bg-white">
              This website!
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsSegment;
