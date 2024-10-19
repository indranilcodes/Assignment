import React, { useState} from 'react';
import axios from 'axios';
import { createContext } from 'react';


export const ApiContext = createContext();

export default function ApiProvider({ children }) {

    const [alldata , setalldata] = useState([]) ;
   const [loading , setloading] = useState(false);

    async function fetchData( )
     {
        setloading(true);

        var url = `https://api.thecatapi.com/v1/images/search?limit=10&page=30&order=Desc`

       
        const response = await axios.get(url);
        const data = response.data;

        console.log(url);
        console.log('data fetched inside the AppContex' , data);

        setalldata(data) 

        setloading(false);
     }

    const value = {
        loading,
        setloading,
        alldata ,
        setalldata ,
        fetchData,
    };

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}
