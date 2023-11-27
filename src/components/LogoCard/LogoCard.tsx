import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./LogoCard.css";
import Card from "react-bootstrap/Card";

type LogoCardProps = {
  src: string;
};

const LogoCard: React.FC<LogoCardProps> = (props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  return (
    <div>
      {showModal && <div className="modal">{IPSUM}</div>}
      <Card
        bg={"primary"}
        className="img-card"
        onClick={() => setShowModal(!showModal)}
      >
        <Card.Body>
          <Card.Img className="img-responsive" src={props.src} />
        </Card.Body>
      </Card>
    </div>
  );
};

const IPSUM =
  "Sweet roll pudding liquorice cake croissant croissant fruitcake. Sesame snaps biscuit danish toffee danish fruitcake sesame snaps. Pudding fruitcake pudding cotton candy gummi bears oat cake ice cream gummi bears chupa chups. Jelly-o bonbon biscuit candy canes donut. Halvah marshmallow shortbread halvah jelly-o gingerbread dessert. Donut halvah toffee shortbread bear claw jelly beans. Sugar plum ice cream fruitcake pastry marshmallow tart cookie sweet. Tart candy canes ice cream dragée chupa chups. Macaroon chocolate bar cookie topping gingerbread marshmallow sweet roll wafer danish. Brownie halvah sweet pastry soufflé cotton candy croissant croissant sesame snaps. Chocolate tootsie roll liquorice chocolate cake brownie.";

export default LogoCard;
