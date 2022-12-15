import React from 'react'

const ProductCard = () => {
  return (
    <>
    <h1 style={{ textAlign: "center" , padding: "50px" }}>All Products</h1>

    <div class="flex-container">
    <div className="card">
      <img
        src=""
        alt=""
        style={{ width: "100%" }}
      />
      <h2>Product Name</h2>
      <p className="price">₹19.99</p>
      <p className="price" >
       Phone Number
      </p>
      <p>
        <button>UnSold</button>
      </p>
    </div>

    <div className="card">
      <img
        src=""
        alt=""
        style={{ width: "100%" }}
      />
      <h2>Product Name</h2>
      <p className="price">₹19.99</p>
      <p className="price" >
       Phone Number
      </p>
      <p>
        <button>UnSold</button>
      </p>
    </div>

    <div className="card">
      <img
        src=""
        alt=""
        style={{ width: "100%" }}
      />
      <h2>Product Name</h2>
      <p className="price">₹19.99</p>
      <p className="price" >
       Phone Number
      </p>
      <p>
        <button>UnSold</button>
      </p>
    </div>
    </div>
    
  </>
  )
}

export default ProductCard