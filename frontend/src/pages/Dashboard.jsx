import "../styles/ProductCard.css"
import { useEffect } from "react";
import { Link, useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProducts , reset} from "../features/userProducts/productSlice";
import Spinner from '../Component/Spinner'



const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);
  const {  isLoading, isError, message } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
    <br />
    <div>
    <h2>welcome {user && user.name}</h2>
    </div>
   
    <h1 style={{display: 'flex', justifyContent: "center"}}>All Products</h1>
     <div className="product">
    <img src={products && products.image} alt='' />
    <div className="product__info">
      <p className="info__name">{products && products.productName}</p>
      <p className="info__price">{products && products.productPrice}</p>
      <Link to="" className="info__button"> UnSold  </Link>
    </div>
  </div>
  </>
  )
}

export default Dashboard