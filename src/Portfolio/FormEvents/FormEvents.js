import React, { useState } from "react";
import MyVerticallyCenteredModal from "./ModalComp";

export default function FormEvents() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    mobile: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
            <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={formData.user}
          onChange={handleInput}
          placeholder="Enter User Name"
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInput}
          placeholder="Enter Mobile Num"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInput}
          placeholder="Enter An Email"
        />
        <input type="submit" />
      </form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={formData.user}
        mobile={formData.mobile}
        email={formData.email}
      />
    </div>
  );
}
