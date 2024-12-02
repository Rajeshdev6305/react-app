import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AccordionTable(props) {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "2px solid #ddd", padding: "8px" }}>ID</th>
                <th style={{ border: "2px solid #ddd", padding: "8px" }}>Price</th>
                <th style={{ border: "2px solid #ddd", padding: "8px" }}>Info</th>
                <th style={{ border: "2px solid #ddd", padding: "8px" }}>Category</th>
                <th style={{ border: "2px solid #ddd", padding: "8px" }}>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "2px solid #ddd", padding: "8px" }}>{props.id}</td>
                <td style={{ border: "2px solid #ddd", padding: "8px" }}>{props.price}</td>
                <td style={{ border: "2px solid #ddd", padding: "8px" }}>{props.info}</td>
                <td style={{ border: "2px solid #ddd", padding: "8px" }}>{props.category}</td>
                <td style={{ border: "2px solid #ddd", padding: "8px" }}>
                  <img
                    src={props.image}
                    alt={props.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionTable;
