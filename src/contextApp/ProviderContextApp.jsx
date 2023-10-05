import {useState,useContext,createContext} from "react";
import data from "../data.json";

export const ContextApp=createContext();

export const ProviderContextApp=({children})=>{
    const [countries,setCountries]=useState(data);
    const [isLoader,setIsLoader]=useState(false);
    const [isThemeDark,setIsThemeDark]=useState(false);
    const [listFilter,setListFilter]=useState([]);
    const [countrySeleted,setCountrySeleted]=useState(null);

    const valuesProvider={
        countries,setCountries,
        isLoader,setIsLoader,
        isThemeDark,setIsThemeDark,
        listFilter,setListFilter,
        countrySeleted,setCountrySeleted
    }
    return (
        <ContextApp.Provider value={valuesProvider}>
            {children}
        </ContextApp.Provider>
    )
}

export const useContextApp=()=>useContext(ContextApp);