function DIVCARD() {
    return (
           <div
        style={{
          backgroundColor: 'aqua',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '900px',
          height: 'auto',
          margin: '40px auto',
          borderRadius: '50px',
          padding: '20px',
          gap: '20px',
        }}
        className="container"
      >
        <div
          style={{
            backgroundColor: 'blue',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: '10px',
          }}
          className="card1"
        >
          <h3>I PHONE</h3>
          <h4>75000</h4>
          <button>Buy Now</button>
        </div>
        <div
          style={{
            backgroundColor: 'green',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: '10px',
          }}
          className="card2"
        >
          <h3>SAMSUNG</h3>
          <h4>45000</h4>
          <button>Buy Now</button>
        </div>
        <div
          style={{
            backgroundColor: 'pink',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
          className="card3"
        >
          <h3>REALME</h3>
          <h4>55000</h4>
          <button>Buy Now</button>
        </div>
        <div
          style={{
            backgroundColor: 'orange',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
          className="card4"
        >
          <h3>REDMI</h3>
          <h4>25000</h4>
          <button>Buy Now</button>
        </div>
        <div
          style={{
            backgroundColor: '#333',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: '10px',
          }}
          className="card5"
        >
          <h3>VIVO</h3>
          <h4>55000</h4>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
  
  export default DIVCARD;
  