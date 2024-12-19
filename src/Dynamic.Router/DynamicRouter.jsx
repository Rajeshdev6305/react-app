import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";

export default function DynamicRouter() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setMovies(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textDecoration: "none" }}>
      {movies.length > 0 ? (
        <ul>
          {movies.map((a) => (
            <li key={a.id}>
              <Link to={`/movies/${a.id}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
}






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {Link} from 'react-router-dom';
// import Loader from "../Loader";

// export default function DynamicRouter() {
//     const{movies,setMovies}=useState([])

//         useEffect(()=>{
//             axios.get('https://fakestoreapi.com/products').then((res)=>
//             setMovies(res.data))
//         },[])
//     return (
//         <div>
//           {movies.length > 0 ? (
//             <ul>
//               {movies.map((a,b) => (
//                 <li key={b.id}>
//                   <Link to={`/movies/${a.id}`}>{a.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <Loader/>
//           )}
//         </div>
//       );
//     }
