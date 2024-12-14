// import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./Modal";


// export default function LoginApi() {
//   const [modalShow, setModalShow] = useState(false);
//   const [formData, setFormData] = useState({
//     user: "",
//     password: "",
//     expiresInMins: 30,
//   });
// const [res, setResponse] =useState(false);
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((a) => {
//         return {
//           ...a,
//       [name]: value,
//         };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//     })
//     .then((res)=> res.json())
//     .then((res)=>{
// res.accessToken? setResponse(true): setResponse(false);
// setModalShow(true);
//     })
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "2rem" }}>
//             <form onSubmit={handleSubmit}
//             style={{
//                 display:"flex",
//                 flexDirection:"column",
//                 width:"50vw",
//             }}>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleInput}
//           placeholder="Enter Username"
//         />
//         <input
//           type="text"
//           name="password"
//           value={formData.password}
//           onChange={handleInput}
//           placeholder="Enter password"
//         />
//         <input
//           type="number"
//           name="expiresInMins"
//           value={formData.expiresInMins}
//           onChange={handleInput}
          
//         />
//         <input type="submit" />
//       </form>
//       {res ?(
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         user={formData.username}
       
//       />
//       ):(
//         <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         user="UnAuthorized User"
//         />
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";
import MyVerticallyCenteredModal from "./Modal";

export default function LoginApi() {
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });
  const [res, setResponse] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

        if (response.data.accessToken) {
        setResponse(true);
      } else {
        setResponse(false);
      }
      setModalShow(true);
    } catch (error) {
      console.error("Login failed:", error);
      setResponse(false);
      setModalShow(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Enter Password"
        />
        <input
          type="number"
          name="expiresInMins"
          value={formData.expiresInMins}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
      {res ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={formData.username}
        />
      ) : (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          user="Unauthorized User"
        />
      )}
    </div>
  );
}
