import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BioSegment from "./components/BioSegment/BioSegment";
import { Container } from "react-bootstrap";
import React from "react";
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
      <Container fluid className="m-0 p-0">
        <BioSegment />
        <ExperienceSegment
          handleOpenCollapse={handleOpenCollapse}
          collapseImage={collapseImage}
          collapseText={collapseText}
          collapseIndex={collapseIndex}
        />
        <ProjectsSegment
          handleOpenCollapse={handleOpenCollapse}
          collapseImage={collapseImage}
          collapseText={collapseText}
          collapseIndex={collapseIndex}
        />
        <LinksSegment
          resumeOnClick={() => setShowConfirmDownload(true)}
          emailOnClick={emailOnClick}
        />
      </Container>
    </div>
  );
}

export default App;
