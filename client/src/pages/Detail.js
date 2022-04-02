import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ProductItemDetail from '../components/ProductItemDetail';

import { QUERY_PRODUCTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_PRODUCTS
} from "../utils/actions";
import { idbPromise } from "../utils/helpers";

function Detail() {

}

export default Detail;