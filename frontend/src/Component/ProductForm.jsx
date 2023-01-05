import "../styles/ProductForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../features/userProducts/productSlice";

const ProductForm = () => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct([text, price, number, file]));
    setText('')
    setPrice('')
    setNumber('')
    setFile('')
    navigate("/");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container">
          <h1>Enter your product details</h1>

          <hr />
          <label htmlFor="productName">
            <b>Product Name</b>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <label htmlFor="productPrice">
            <b>Price</b>
          </label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="phno">
            <b>Phone Number</b>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <label htmlFor="psw-repeat">
            {" "}
            <b>Product Image</b>
          </label>
          <input
            type="file"
            id="myFile"
            name="filename"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />

          <hr />
          <button type="submit" className="registerbtn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
