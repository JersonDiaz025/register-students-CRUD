import React, { createContext, useReducer } from 'react';
import Reducer from './storeReducer';


const initialStore = {
  user: { name_user: "", isLogged: null },
  navbar: { openModalUser: false },
  sidebar: { openSidebar: false },
};

// store que envolvera el app para que los componentes tomen el estado gobal
const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(Reducer, initialStore)

    return (
        <Context.Provider value={[store, dispatch]}>
            {children}
        </Context.Provider>
    )

}

export const Context = createContext(initialStore)

export default StoreProvider;