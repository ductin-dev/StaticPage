import { initializeApollo } from "@middleware/apollo/client";

export function useApollo() {

     const store = initializeApollo();
     return store;

};