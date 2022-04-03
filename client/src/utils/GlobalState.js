import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';


const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {



    const [state, dispatch] = useProductReducer({
        products: [],
        currentProduct: "",
        cart: [],
        cartOpen: false
      });
    //  confirm the functionality 
      console.log(state);
      return <Provider value={[state, dispatch]} {...props} />;
    };
//    context return 
    const useStoreContext = () => {
      return useContext(StoreContext);



};

export { StoreProvider, useStoreContext };