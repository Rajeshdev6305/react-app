import React from "react";
import Accordion from "react-bootstrap/Accordion";



function ACcordion(props) {
  return (
    <Accordion style={{display: "flex", }}>
      <Accordion.Item style={{width: "300px",gap:"20px" }}>
        <Accordion.Header >{props.title}</Accordion.Header>
        <Accordion.Body>{props.id}</Accordion.Body>
        <Accordion.Body>{props.price}</Accordion.Body>
        <Accordion.Body>{props.info}</Accordion.Body>
        <Accordion.Body>{props.category}</Accordion.Body>
        <Accordion.Body>
          <img
            src={props.image}
            alt={props.title}
            style={{ width: "100px", height: "auto" }}
          />
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}

export default ACcordion;
