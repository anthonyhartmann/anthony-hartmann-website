import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Spacer from "./components/Spacer";
import LogoCard from "./components/LogoCard/LogoCard";
import BioSegment from "./components/BioSegment/BioSegment";
import {
  Button,
  Col,
  Container,
  Modal,
  Row,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  EnvelopeHeart,
  FileEarmarkPersonFill,
  Github,
  Linkedin,
} from "react-bootstrap-icons";
import {
  BIO_BLURB,
  DOORDASH_DESC,
  FABRIC_DESC,
  IK_DESC,
  MARQETA_DESC,
  META_DESC,
  MINDSWARMS_DESC,
  TAROT_DESC,
} from "./strings";
import CollapseBlurb from "./components/CollapseBlurb/CollapseBlurb";
import ExperienceSegment from "./components/ExperienceSegment/ExperienceSegment";
import ConfirmDownloadModal from "./components/ConfirmDownloadModal/ConfirmDownloadModal";
import ProjectsSegment from "./components/ProjectsSegment/ProjectsSegment";
import EmailConfirmToast from "./components/EmailConfirmToast/EmailConfirmToast";
import LinksSegment from "./components/LinksSegment/LinksSegment";

function App() {
  const [collapseImage, setCollapseImage] = React.useState("");
  const [collapseText, setCollapseText] = React.useState("");
  const [collapseIndex, setCollapseIndex] = React.useState<number>(-1);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");
  const [showConfirmDownload, setShowConfirmDownload] = React.useState(false);

  const handleOpenCollapse = (
    index: number,
    imagePath: string,
    collapseText: string
  ) => {
    setCollapseIndex(index == collapseIndex ? -1 : index);
    setCollapseImage(imagePath);
    setCollapseText(collapseText);
  };

  const emailOnClick = () => {
    navigator.clipboard.writeText("anthonyhartmann395@gmail.com");
    setToastMsg("Email copied successfully.");
    setShowToast(true);
  };

  return (
    <div className="App">
      <EmailConfirmToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMsg}
      />
      <NavBar />
      <ConfirmDownloadModal
        show={showConfirmDownload}
        onHide={() => setShowConfirmDownload(false)}
      />
      {/* TODO: find a more BootStrap-thonic way of doing this */}
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <BioSegment />
        <Spacer size={4} />
        <ExperienceSegment
          handleOpenCollapse={handleOpenCollapse}
          collapseImage={collapseImage}
          collapseText={collapseText}
          collapseIndex={collapseIndex}
        />
        <Spacer size={2} />
        <ProjectsSegment
          handleOpenCollapse={handleOpenCollapse}
          collapseImage={collapseImage}
          collapseText={collapseText}
          collapseIndex={collapseIndex}
        />
        <Spacer size={4} />
        <LinksSegment
          resumeOnClick={() => setShowConfirmDownload(true)}
          emailOnClick={emailOnClick}
        />
      </Container>
    </div>
  );
}

export default App;
