import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions'; 
const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log('Err', err);
    });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if(productId && productId !=='') fetchProductDetail();
  },[productId]);
  console.log(product);

  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <div>....Loading</div>
      ) : (
        <div className='ui placeholder segment'>
          <div className='ui'>
           <img src= {image} alt={title} />
          </div>
          <div className='ui'>
            <h1>{title}</h1>
          </div>
          <div className='ui'>
            <p>${price}</p>
          </div>
          <div className='ui'>
            <p>{category}</p>
          </div>
          <div className='ui'>
            <p>{description}</p>
          </div>

        </div>
      )}
    </div>
  )
}

export default ProductDetails