import React from 'react'

import {Link} from 'react-router-dom'

const ProductItem = ({}) => {
  return (<>
   
    <div className="product">
    <img src="" alt='' />
    <div className="product__info">
      <p className="info__name"></p>
      <p className="info__price">0000</p>
      <Link to="" className="info__button"> UnSold  </Link>
    </div>
  </div>
  </>
   
  )
}

export default ProductItem