import React, { useEffect } from 'react';
import CartDrawer from '../CartDrawer';
import CartDrawerBackdrop from '../CartDrawerBackdrop';
import { useLazyQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState'
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART} from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import "bootstrap-icons/font/bootstrap-icons.css";

const stripePromise = loadStripe('');

