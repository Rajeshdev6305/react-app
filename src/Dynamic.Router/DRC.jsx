import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DRC(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Card
        style={{
          display: "flex",
          width: "18rem",
          justifyContent: "center",
          borderColor: "2px solid black",
        }}
      >
        <Card.Img variant="top" style={{ height: "170px" }} src={props.img} />
        <Card.Body style={{ height: "150px", overflowY: "scroll" }}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
        <Card.Footer
          className="text-muted"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button variant="primary">{props.info}</Button>
          <Button variant="primary" onClick={handleBack}>
            Back
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default DRC;
