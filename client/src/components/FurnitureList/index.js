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






    }

export default FurnitureList;