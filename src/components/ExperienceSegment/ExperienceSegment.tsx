import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DOORDASH_DESC,
  FABRIC_DESC,
  IK_DESC,
  MARQETA_DESC,
  MINDSWARMS_DESC,
} from "../../strings";
import LogoCard from "../LogoCard/LogoCard";
import CollapseBlurb from "../CollapseBlurb/CollapseBlurb";

type ExperienceSegmentProps = {
  handleOpenCollapse: (
    index: number,
    imagePath: string,
    collapseText: string
  ) => void;
  collapseIndex: number;
  collapseImage: string;
  collapseText: string;
};

const ExperienceSegment: React.FC<ExperienceSegmentProps> = (props) => {
  return (
    <div className="py-5 bg-secondary text-black">
      <Row className="row justify-content-center">
        <Col xl={12}>
          <h1 id="experience" className="pb-3 text-center fw-bold">
            Experience
          </h1>
        </Col>
      </Row>
      <Row className="row justify-content-center">
        <Col lg={3}>
          <LogoCard
            src="/images/fabric-logo-black.svg"
            onClick={() =>
              props.handleOpenCollapse(
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
              props.handleOpenCollapse(
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
              props.handleOpenCollapse(
                2,
                "/images/interview-kickstart-logo.svg",
                IK_DESC
              )
            }
          />
        </Col>
      </Row>
      <CollapseBlurb
        in={-1 < props.collapseIndex && props.collapseIndex <= 2}
        imagePath={props.collapseImage}
        blurbText={props.collapseText}
      />
      <Row className="row justify-content-center">
        <Col lg={3}>
          <LogoCard
            src="/images/mindswarms.svg"
            onClick={() =>
              props.handleOpenCollapse(
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
              props.handleOpenCollapse(
                4,
                "/images/primary-logo-white.svg",
                MARQETA_DESC
              )
            }
          />
        </Col>
      </Row>
      <CollapseBlurb
        in={3 <= props.collapseIndex && props.collapseIndex < 5}
        imagePath={props.collapseImage}
        blurbText={props.collapseText}
      />
    </div>
  );
};

export default ExperienceSegment;
