import '../styles/ProductForm.css'

const ProductForm = () => {
  return (
   <>
  <form action="">
  <div className="container">
    <h1>Enter your product details</h1>
    <hr />
    <label htmlFor="productName">
      <b>Product Name</b>
    </label>
    <input type="text" placeholder="Product Name" required="" />
    <label htmlFor="productPrice">
      <b>Price</b>
    </label>
    <input type="number" placeholder="Price" required="" />
    <label htmlFor="phno">
      <b>Phone Number</b>
    </label>
    <input type="number" placeholder="Phone Number" required="" />
    <label htmlFor="psw-repeat">
      <b>Product Image</b>
    </label>
    <input type="file" id="myFile" name="filename" />
    <hr />
    <button type="submit" className="registerbtn">
      Submit
    </button>
  </div>
</form>
   </>
  )
}

export default ProductForm