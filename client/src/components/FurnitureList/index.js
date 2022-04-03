import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import ProductCard from '../ProductCard';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { idbPromise } from "../../utils/helpers";

function FurnitureList() {



    const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if(data){
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });


      data.products.forEach((product)=> {
        idbPromise('products', "put", product);
      });
    }else if (!loading){
     
      idbPromise('products', 'get').then((products) => {
      
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        });
      });
    }
  }, [data, loading, dispatch]);



    }

export default FurnitureList;