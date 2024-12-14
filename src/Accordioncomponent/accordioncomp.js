// import React from "react";
// import Accordion from "react-bootstrap/Accordion";

// function ACcordion(props) {
//   return (
//     <Accordion style={{}}>
//       <Accordion.Item style={{}}>
//         <Accordion.Header >{props.title}</Accordion.Header>
//         <Accordion.Body>{props.id}</Accordion.Body>
//         <Accordion.Body>{props.price}</Accordion.Body>
//         <Accordion.Body>{props.info}</Accordion.Body>
//         <Accordion.Body>{props.category}</Accordion.Body>
//         <Accordion.Body>
//           <img
//             src={props.image}
//             alt={props.title}
//             style={{ width: "100px", height: "auto" }}
//           />
//         </Accordion.Body>
//         </Accordion.Item>
//     </Accordion>
//   );
// }

// export default ACcordion;





import React from "react";
import Accordion from "react-bootstrap/Accordion";

function ACcordion(props) {
  return (
    <Accordion style={{display:"block"}}>
      <Accordion.Item eventKey={props.id.toString()}>
        <Accordion.Header>{props.title}</Accordion.Header>
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

function ACCC() {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling, or other outdoors. Good gift choice for your family member.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. Body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load, and response. Boosts burst write performance for typical PC workloads.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash delivers high transfer speeds. Remarkable transfer speeds for faster bootup and improved system performance.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience. Fast and easy setup with a sleek design and high capacity.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21.5 inches Full HD widescreen IPS display. Radeon Free Sync technology with 75Hz refresh rate.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
    },
    {
      id: 14,
      title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
      price: 999.99,
      description:
        "Super Ultrawide 32:9 Curved Gaming Monitor with Quantum Dot technology and HDR support.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "3-in-1 detachable jacket with adjustable cuffs and pockets for secure storage.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 },
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <ACcordion
          key={product.id}
          title={product.title}
          info={product.description}
          price={product.price}
          id={product.id}
          category={product.category}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ACCC;
