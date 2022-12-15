import "../styles/ProductCard.css"
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <h1 style={{display: 'flex', justifyContent: "center"}}>All Products</h1>
     <div className="product">
    <img src="" alt='' />

    <div className="product__info">
      <p className="info__name">name</p>
      <p className="info__price">0000</p>

      <Link to="" className="info__button">
        UnSold
      </Link>
    </div>
  </div>
  </>
  )
}

export default Dashboard