import React from "react";
import { useParams } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';
import Cart from "../Cart";
import { useQuery } from '@apollo/client';
import {QUERY_PRODUCTS} from '../../utils/queries';
import { useStoreContext } from "../../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_DAYS,
  ADD_TO_CART,
} from "../../utils/actions";

