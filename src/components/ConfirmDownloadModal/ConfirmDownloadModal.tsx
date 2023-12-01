import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

type ConfirmDownloadModalProps = {
  show: boolean;
  onHide: () => void;
};

const ConfirmDownloadModal: React.FC<ConfirmDownloadModalProps> = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Download</Modal.Title>
      </Modal.Header>
      <Modal.Body>Would you like to download my resume?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Not now
        </Button>
        <Button variant="secondary">
          <Link
            to="/files/resume.pdf"
            target="_blank"
            download
            onClick={props.onHide}
          >
            Yes!
          </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDownloadModal;
